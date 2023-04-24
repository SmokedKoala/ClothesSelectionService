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
    {name: 'Кеды', value: 'keds', imageSrc: 'assets/images/footwear/keds.jpg'},
    {name: 'Кроссовки', value: 'sneakers', imageSrc: 'assets/images/footwear/sneakers.jpg'},
    {name: 'Ботинки', value: 'boots', imageSrc: 'assets/images/footwear/boots.jpg'},
    {name: 'Туфли', value: 'shoes', imageSrc: 'assets/images/footwear/shoes.jpg'},
    {name: 'Сапоги', value: 'boots', imageSrc: 'assets/images/footwear/high-boots.jpg'},
    {name: 'Тапочки', value: 'slippers', imageSrc: 'assets/images/footwear/slippers.avif'},
    {name: 'Сандали', value: 'sandals', imageSrc: 'assets/images/footwear/sandals.jpg'},
    {name: 'Босоножки', value: 'pumps', imageSrc: 'assets/images/footwear/pumps.jpg'},
    {name: 'Подкрадули', value: 'podkraduli', imageSrc: 'assets/images/footwear/podkraduli.jpg'},
    {name: 'Бархатные тяги', value: 'barkh_tyagi', imageSrc: 'assets/images/footwear/barkh_tyagi.jpg'},
  ];

  readonly secondClothes = [
    {name: 'Шорты', value: 'shorts', imageSrc: 'assets/images/bottoms/shorts.jpg'},
    {name: 'Брюки', value: 'trousers', imageSrc: 'assets/images/bottoms/trousers.jpg'},
    {name: 'Юбка', value: 'skirt', imageSrc: 'assets/images/bottoms/skirt.jpg'},
    {name: 'Джинсы', value: 'jeans', imageSrc: 'assets/images/bottoms/jeans.avif'},
    {name: 'Леггинсы', value: 'leggings', imageSrc: 'assets/images/bottoms/leggings.avif'},
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
