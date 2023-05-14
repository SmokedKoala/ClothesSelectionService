import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditClothesDialogComponent } from '@modules/params/edit-clothes-dialog/edit-clothes-dialog.component';
import { FormControl } from '@angular/forms';
import { EditColorsDialogComponent } from '@modules/params/edit-colors-dialog/edit-colors-dialog.component';
import { TUI_DEFAULT_MATCHER, TuiDestroyService, tuiIsPresent, tuiPure } from '@taiga-ui/cdk';
import { distinctUntilChanged, filter, takeUntil, tap } from 'rxjs';
import { citiesValues } from '@shared/consts/cities-select-values';
import { DEFAULT_COLOR, possibleColorsPalette } from '@shared/consts/possible-colors-palette';
import { SelectedColorsService } from '@core/services/selected-colors.service';
import { City } from '@shared/types/city';
import { SelectedCityService } from '@core/services/selected-city.service';
import { SelectedClothesService } from '@core/services/selected-clothes.service';
import { Clothes } from '@shared/types/clothes';
import { bottomClothesValues, footwearValues } from '@shared/consts/clothes-select-values';
import { possibleShops } from '@shared/consts/possible-shops';
import { SelectedShopsService } from '@core/services/selected-shops.service';

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
  readonly colorsPalettes = this.createPalettes();
  readonly clothesSets = this.createClothesSets();
  readonly shops: string[] = possibleShops;

  imageUrl: string | null = null;
  shopSearchString: string | null = '';

  readonly city: FormControl<City | null> = new FormControl();
  readonly colorsPalette: FormControl<string[] | null> = new FormControl();
  readonly clothesSet: FormControl<Clothes[] | null> = new FormControl();
  readonly shopsSelect: FormControl<string[] | null> = new FormControl();

  constructor(
    readonly selectedColorsService: SelectedColorsService,
    readonly selectedClothesService: SelectedClothesService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private readonly uploadedImageUrlService: UploadedImageUrlService,
    private readonly selectedCityService: SelectedCityService,
    private readonly selectedShopsService: SelectedShopsService,
    private readonly destroy$: TuiDestroyService) {
    this.imageUrl = this.uploadedImageUrlService.imageUrl;

    this.selectedCityService.city$.pipe(
      filter(tuiIsPresent),
      tap(city => {
        this.city.setValue(city);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.selectedColorsService.colors$.pipe(
      filter(tuiIsPresent),
      tap(colors => {
        this.colorsPalette.setValue(colors);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.selectedClothesService.clothes$.pipe(
      filter(tuiIsPresent),
      tap(clothes => {
        this.clothesSet.setValue(clothes);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.selectedShopsService.shops$.pipe(
      filter(tuiIsPresent),
      tap(shops => {
        this.shopsSelect.setValue(shops);
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

    this.colorsPalette.valueChanges
      .pipe(
        filter(tuiIsPresent),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(colors => {
        this.selectedColorsService.update(colors);
      });

    this.clothesSet.valueChanges
      .pipe(
        filter(tuiIsPresent),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(clothes => {
        this.selectedClothesService.update(clothes);
      });

    this.shopsSelect.valueChanges
      .pipe(
        filter(tuiIsPresent),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(shops => {
        this.selectedShopsService.update(shops);
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

  createPalettes(): string[][] {
    const palettes: string[][] = [];
    let palette: string[] = [];
    let index = 0;

    possibleColorsPalette.forEach((value, key) => {
      palette.push(value);

      if (index % 2 === 1) {
        palettes.push(palette);
        palette = [];
      }

      index++;
    });

    return palettes;
  }

  createClothesSets(): Clothes[][] {
    const sets: Clothes[][] = [];
    const numberOfSets = Math.min(bottomClothesValues.length, footwearValues.length);

    for (let i = 0; i < numberOfSets; i++) {
      sets.push([footwearValues[i], bottomClothesValues[i]]);
    }

    return sets;
  }

  @tuiPure
  filterShops(search: string | null): readonly string[] {
    return this.shops.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
}
