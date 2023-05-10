import { ChangeDetectionStrategy, Component, Inject, Injector, Input } from '@angular/core';
import { Clothes } from '@shared/types/clothes';
import { DEFAULT_BOTTOM_CLOTHES_VALUE, DEFAULT_FOOTWEAR_VALUE } from '@shared/consts/clothes-select-values';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { takeUntil } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import {
  ClothesSetDialogComponent
} from '@modules/search/search-results/clothes-set-page/clothes-set-dialog.component';

@Component({
  selector: 'cls-clothes-set-card',
  templateUrl: './clothes-set-card.component.html',
  styleUrls: ['./clothes-set-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService]
})
export class ClothesSetCardComponent {
  @Input() clothesSet: Clothes[] = [DEFAULT_FOOTWEAR_VALUE, DEFAULT_BOTTOM_CLOTHES_VALUE];

  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
              @Inject(Injector) private readonly injector: Injector,
              private readonly destroy$: TuiDestroyService,
  ) {
  }

  openClothesSetDialog(): void {
    this.dialogService.open(
      new PolymorpheusComponent(ClothesSetDialogComponent, this.injector),
      {
        label: 'Комплект одежды',
        data: {
          clothesSet: this.clothesSet,
        },
        dismissible: false,
        size: 'auto',
      }
    )
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe();
  }
}
