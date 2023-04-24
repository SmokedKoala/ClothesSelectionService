import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditClothesDialogComponent } from '@modules/params/edit-clothes-dialog/edit-clothes-dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cls-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParamsComponent {
  readonly recognizedClothesType = 'Футболка';
  readonly recognizedClothesHexColor = '#000';

  readonly cities = [
    {name: 'Москва', value: 'moscow'},
    {name: 'Санкт-Петербург', value: 'spb'},
    {name: 'Новосибирск', value: 'nsk'},
    {name: 'Екатеринбург', value: 'ekb'},
    {name: 'Нижний Новгород', value: 'nnov'},
    {name: 'Казань', value: 'kzn'},
    {name: 'Челябинск', value: 'chel'},
    {name: 'Омск', value: 'omsk'},
    {name: 'Самара', value: 'samara'},
    {name: 'Ростов-на-Дону', value: 'rostov'},
    {name: 'Уфа', value: 'ufa'},
  ];

  imageUrl: string | null = null;

  firstSuggestedClothes = new FormControl();
  secondSuggestedClothes = new FormControl();


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
          firstSuggestedClothesType: 'Обувь',
          secondSuggestedClothesType: 'Поясная одежда',
          firstSuggestedClothes: this.firstSuggestedClothes.value || {name: 'Кеды', value: 'keds', imageSrc: ''},
          secondSuggestedClothes: this.secondSuggestedClothes.value || {name: 'Шорты', value: 'shorts', imageSrc: ''},
        },
        dismissible: false,
        size: 'auto',
      }
    )
      .subscribe(
        (result: any) => {
          this.firstSuggestedClothes.setValue(result.firstClothes);
          this.secondSuggestedClothes.setValue(result.secondClothes);
        },
      );
  }

  openEditColorsDialog() {
    // TODO: implement
  }
}
