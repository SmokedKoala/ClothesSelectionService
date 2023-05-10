import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';

@Component({
  selector: 'cls-clothes-set-dialog',
  templateUrl: './clothes-set-dialog.component.html',
  styleUrls: ['./clothes-set-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClothesSetDialogComponent {
  get data(): any {
    return this.context.data;
  }

  constructor(@Inject(POLYMORPHEUS_CONTEXT)
              private readonly context: TuiDialogContext<any, any>,) {
  }
}
