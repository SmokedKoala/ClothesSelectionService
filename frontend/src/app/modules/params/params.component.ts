import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditClothesDialogComponent } from '@modules/params/edit-clothes-dialog/edit-clothes-dialog.component';

@Component({
  selector: 'cls-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParamsComponent {
  imageUrl: string | null = null;

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
          firstSuggestedClothes: {name: 'Кеды', value: 'keds', imageSrc: ''},
          secondSuggestedClothes: {name: 'Шорты', value: 'shorts', imageSrc: ''},
        },
        dismissible: false,
        size: 'auto',
      }
    )
      .subscribe(
        {
          next: result => {
            // TODO pass result to images
            console.log('result', result);
          },
        }
      );
  }

  openEditColorsDialog() {
    // TODO: implement
  }
}
