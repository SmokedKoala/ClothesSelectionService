import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { FormControl, FormGroup } from '@angular/forms';
import { bottomValues, footwearValues } from '@shared/clothes-select-values';


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

  readonly firstClothesSelectItems = footwearValues;
  readonly secondClothesSelectItems = bottomValues;

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
