import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_COLOR, possibleColorsPalette } from '@shared/consts/possible-colors-palette';
import { SelectedColorsService } from '@core/services/selected-colors.service';

@Component({
  selector: 'cls-edit-colors-dialog',
  templateUrl: './edit-colors-dialog.component.html',
  styleUrls: ['./edit-colors-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditColorsDialogComponent {
  colorsPalette = possibleColorsPalette;

  color1$ = new BehaviorSubject(DEFAULT_COLOR);
  color2$ = new BehaviorSubject(DEFAULT_COLOR);

  constructor(@Inject(POLYMORPHEUS_CONTEXT)
              private readonly context: TuiDialogContext<any, any>,
              private readonly selectedColorsService: SelectedColorsService) {
    const setColors = this.selectedColorsService.get();
    this.color1$.next(setColors[0]);
    this.color2$.next(setColors[1]);
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
