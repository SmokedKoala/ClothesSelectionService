import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Clothes } from '@shared/types/clothes';
import { DEFAULT_BOTTOM_CLOTHES_VALUE, DEFAULT_FOOTWEAR_VALUE } from '@shared/consts/clothes-select-values';

@Component({
  selector: 'cls-clothes-set-card',
  templateUrl: './clothes-set-card.component.html',
  styleUrls: ['./clothes-set-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClothesSetCardComponent {
  @Input() clothesSet: Clothes[] = [DEFAULT_FOOTWEAR_VALUE, DEFAULT_BOTTOM_CLOTHES_VALUE];
  @Input() clothesSetId: number | null = null;

  constructor() {
  }
}
