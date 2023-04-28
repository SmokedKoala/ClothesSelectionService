import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditClothesDialogComponent } from '@modules/params/edit-clothes-dialog/edit-clothes-dialog.component';
import { FormControl } from '@angular/forms';
import { EditColorsDialogComponent } from '@modules/params/edit-colors-dialog/edit-colors-dialog.component';
import { TuiDestroyService, tuiIsPresent } from '@taiga-ui/cdk';
import { distinctUntilChanged, filter, takeUntil, tap } from 'rxjs';
import { citiesValues } from '@shared/consts/cities-select-values';
import { DEFAULT_COLOR } from '@shared/consts/possible-colors-palette';
import { SelectedColorsService } from '@core/services/selected-colors.service';
import { City } from '@shared/types/city';
import { SelectedCityService } from '@core/services/selected-city.service';
import { SelectedClothesService } from '@core/services/selected-clothes.service';

@Component({
  selector: 'cls-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService]
})
export class ParamsComponent implements OnInit {
  readonly recognizedClothesType = 'Футболка';
  readonly recognizedClothesHexColor = DEFAULT_COLOR;
  readonly firstSuggestedClothesType = 'Обувь';
  readonly secondSuggestedClothesType = 'Поясная одежда';
  readonly cities = citiesValues;

  imageUrl: string | null = null;

  city: FormControl<City | null> = new FormControl();

  constructor(
    readonly selectedColorsService: SelectedColorsService,
    readonly selectedClothesService: SelectedClothesService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private readonly uploadedImageUrlService: UploadedImageUrlService,
    private readonly selectedCityService: SelectedCityService,
    private readonly destroy$: TuiDestroyService) {
    this.imageUrl = this.uploadedImageUrlService.imageUrl;

    this.selectedCityService.city$.pipe(
      filter(tuiIsPresent),
      tap(city => {
        this.city.setValue(city);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnInit() {
    this.city.valueChanges
      .pipe(
        filter(tuiIsPresent),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(city => {
        this.selectedCityService.update(city);
      });
  }

  openEditClothesDialog() {
    this.dialogService.open(
      new PolymorpheusComponent(EditClothesDialogComponent, this.injector),
      {
        label: 'Изменение типа подбираемой одежды',
        data: {
          firstSuggestedClothesType: this.firstSuggestedClothesType,
          secondSuggestedClothesType: this.secondSuggestedClothesType,
        },
        dismissible: false,
        size: 'auto',
      }
    )
      .pipe(
        filter(tuiIsPresent)
      )
      .subscribe(
        (result: any) => {
          this.selectedClothesService.update([result.firstClothes, result.secondClothes]);
        },
      );
  }

  openEditColorsDialog() {
    this.dialogService.open(
      new PolymorpheusComponent(EditColorsDialogComponent, this.injector),
      {
        label: 'Изменение цветов подбираемой одежды',
        dismissible: false,
        size: 'auto',
      }
    )
      .pipe(
        filter(tuiIsPresent)
      )
      .subscribe(
        (selectedColors: any) => {
          this.selectedColorsService.update(selectedColors);
        },
      );
  }
}
