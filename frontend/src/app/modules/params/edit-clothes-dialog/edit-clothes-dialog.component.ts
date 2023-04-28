import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { FormControl, FormGroup } from '@angular/forms';
import { bottomClothesValues, footwearValues } from '@shared/consts/clothes-select-values';
import { SelectedClothesService } from '@core/services/selected-clothes.service';


@Component({
  selector: 'cls-edit-clothes-dialog',
  templateUrl: './edit-clothes-dialog.component.html',
  styleUrls: ['./edit-clothes-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditClothesDialogComponent {
  readonly form = new FormGroup({
    firstClothes: new FormControl(this.selectedClothesService.get()[0]),
    secondClothes: new FormControl(this.selectedClothesService.get()[1]),
  });

  readonly firstClothesSelectItems = footwearValues;
  readonly secondClothesSelectItems = bottomClothesValues;

  get data(): any {
    return this.context.data;
  }

  constructor(@Inject(POLYMORPHEUS_CONTEXT)
              private readonly context: TuiDialogContext<any, any>,
              private readonly selectedClothesService: SelectedClothesService,) {
  }

  onAccept(): void {
    this.context.completeWith(this.form.value);
  }

  onCancel(): void {
    this.context.completeWith(null);
  }
}
