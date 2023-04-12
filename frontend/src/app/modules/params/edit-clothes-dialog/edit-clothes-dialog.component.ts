import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'cls-edit-clothes-dialog',
  templateUrl: './edit-clothes-dialog.component.html',
  styleUrls: ['./edit-clothes-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditClothesDialogComponent {
  readonly form = new FormGroup({
    firstClothes: new FormControl(this.data.firstSuggestedClothes),
    secondClothes: new FormControl(this.data.secondSuggestedClothes),
  });

  firstClothesImageSrc$: Observable<string> = this.form.get('firstClothes')!.valueChanges.pipe(
    map(clothes => clothes.imageSrc),
  );

  readonly firstClothes = [
    {name: 'Кеды', value: 'keds', imageSrc: 'assets/images/footwear/keds.png'},
    {name: 'Кроссовки', value: 'sneakers', imageSrc: 'assets/images/footwear/sneakers.png'},
    {name: 'Ботинки', value: 'boots', imageSrc: 'assets/images/footwear/boots.png'},
    {name: 'Туфли', value: 'shoes', imageSrc: 'assets/images/footwear/shoes.png'},
    {name: 'Сапоги', value: 'boots', imageSrc: 'assets/images/footwear/boots.png'},
    {name: 'Тапочки', value: 'slippers', imageSrc: 'assets/images/footwear/slippers.png'},
    {name: 'Сандали', value: 'sandals', imageSrc: 'assets/images/footwear/sandals.png'},
    {name: 'Босоножки', value: 'pumps', imageSrc: 'assets/images/footwear/pumps.png'},
    {name: 'Подкрадули', value: 'podkraduli', imageSrc: 'assets/images/footwear/podkraduli.jpg'},
    {name: 'Бархатные тяги', value: 'barkh_tyagi', imageSrc: 'assets/images/footwear/barkh_tyagi.jpg'},
  ];

  readonly secondClothes = [
    {name: 'Шорты', value: 'shorts', imageSrc: 'assets/images/shorts.png'},
    {name: 'Брюки', value: 'trousers', imageSrc: 'assets/images/trousers.png'},
    {name: 'Юбка', value: 'skirt', imageSrc: 'assets/images/skirt.png'},
    {name: 'Джинсы', value: 'jeans', imageSrc: 'assets/images/jeans.png'},
    {name: 'Штаны', value: 'pants', imageSrc: 'assets/images/pants.png'},
    {name: 'Леггинсы', value: 'leggings', imageSrc: 'assets/images/leggings.png'},
  ];

  get data(): any {
    return this.context.data;
  }

  constructor(@Inject(POLYMORPHEUS_CONTEXT)
              private readonly context: TuiDialogContext<any, any>,) {
  }

  onAccept(): void {
    this.context.completeWith(this.form.value);
  }

  onCancel(): void {
    this.context.completeWith(null);
  }
}
