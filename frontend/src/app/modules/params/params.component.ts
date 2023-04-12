import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';

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

  constructor(private readonly uploadedImageUrlService: UploadedImageUrlService) {
    this.imageUrl = this.uploadedImageUrlService.imageUrl;
  }

  getComplementaryColors(): string[] {
    // TODO: implement
    return [];
  }

  openEditClothesDialog() {
    //  TODO: implement
  }

  openEditColorsDialog() {
    // TODO: implement
  }
}
