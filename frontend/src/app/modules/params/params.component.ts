import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditClothesDialogComponent } from '@modules/params/edit-clothes-dialog/edit-clothes-dialog.component';
import { FormControl } from '@angular/forms';
import { DEFAULT_BOTTOM_CLOTHES_VALUE, DEFAULT_FOOTWEAR_VALUE } from '@shared/consts/clothes-select-values';
import { Clothes } from '@shared/types/clothes';
import { EditColorsDialogComponent } from '@modules/params/edit-colors-dialog/edit-colors-dialog.component';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { filter } from 'rxjs';
import { citiesValues } from '@shared/consts/cities-select-values';

@Component({
  selector: 'cls-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParamsComponent {
  readonly recognizedClothesType = 'Футболка';
  readonly recognizedClothesHexColor = '#000';
  readonly firstSuggestedClothesType = 'Обувь';
  readonly secondSuggestedClothesType = 'Поясная одежда';
  readonly cities = citiesValues;

  imageUrl: string | null = null;

  firstSuggestedClothes: FormControl<Clothes | null> = new FormControl(DEFAULT_FOOTWEAR_VALUE);
  secondSuggestedClothes: FormControl<Clothes | null> = new FormControl(DEFAULT_BOTTOM_CLOTHES_VALUE);

  suggestedClothesHexColors = ['#587880', '#c1df8a'];

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private readonly uploadedImageUrlService: UploadedImageUrlService) {
    this.imageUrl = this.uploadedImageUrlService.imageUrl;
  }

  getComplementaryColors(): string[] {
    // TODO: implement
    return [];
  }

  openEditClothesDialog() {
    this.dialogService.open(
      new PolymorpheusComponent(EditClothesDialogComponent, this.injector),
      {
        label: 'Изменение типа подбираемой одежды',
        data: {
          firstSuggestedClothesType: this.firstSuggestedClothesType,
          secondSuggestedClothesType: this.secondSuggestedClothesType,
          firstSuggestedClothes: this.firstSuggestedClothes.value || DEFAULT_FOOTWEAR_VALUE,
          secondSuggestedClothes: this.secondSuggestedClothes.value || DEFAULT_BOTTOM_CLOTHES_VALUE,
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
          this.firstSuggestedClothes.setValue(result.firstClothes);
          this.secondSuggestedClothes.setValue(result.secondClothes);
        },
      );
  }

  openEditColorsDialog() {
    this.dialogService.open(
      new PolymorpheusComponent(EditColorsDialogComponent, this.injector),
      {
        label: 'Изменение цветов подбираемой одежды',
        data: {
          suggestedClothesHexColors: this.suggestedClothesHexColors
        },
        dismissible: false,
        size: 'auto',
      }
    )
      .pipe(
        filter(tuiIsPresent)
      )
      .subscribe(
        (selectedColors: any) => {
          this.suggestedClothesHexColors = selectedColors;
        },
      );
  }
}
