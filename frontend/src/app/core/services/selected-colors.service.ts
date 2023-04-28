import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedColorsService {
  private readonly colors = new BehaviorSubject<string[]>(['#587880', '#c1df8a']);
  readonly colors$ = this.colors.pipe(distinctUntilChanged());

  update(newColors: string[]): void {
    this.colors.next(newColors);
  }

  get(): string[] {
    return this.colors.value;
  }
}
