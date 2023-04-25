import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';
import { possibleColorsPalette } from '@shared/consts/possible-colors-palette';

@Component({
  selector: 'cls-edit-colors-dialog',
  templateUrl: './edit-colors-dialog.component.html',
  styleUrls: ['./edit-colors-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditColorsDialogComponent {
  DEFAULT_COLOR = '#000000';

  colors = possibleColorsPalette;

  color1$ = new BehaviorSubject(this.data.suggestedClothesHexColors[0] || this.DEFAULT_COLOR);
  color2$ = new BehaviorSubject(this.data.suggestedClothesHexColors[1] || this.DEFAULT_COLOR);

  get data(): any {
    return this.context.data;
  }

  constructor(@Inject(POLYMORPHEUS_CONTEXT)
              private readonly context: TuiDialogContext<any, any>,) {
  }

  updateColor(color: string, index: number): void {
    switch (index) {
      case 1:
        this.color1$.next(color);
        break;
      case 2:
        this.color2$.next(color);
        break;
    }
  }

  onAccept(): void {
    this.context.completeWith([
      this.color1$.value,
      this.color2$.value,
    ]);
  }

  onCancel(): void {
    this.context.completeWith(null);
  }
}
