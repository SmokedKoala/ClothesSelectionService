import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { Clothes } from '@shared/types/clothes';
import { DEFAULT_BOTTOM_CLOTHES_VALUE, DEFAULT_FOOTWEAR_VALUE } from '@shared/consts/clothes-select-values';

@Injectable({
  providedIn: 'root'
})
export class SelectedClothesService {
  private readonly clothes = new BehaviorSubject<Clothes[]>([DEFAULT_FOOTWEAR_VALUE, DEFAULT_BOTTOM_CLOTHES_VALUE]);
  readonly clothes$ = this.clothes.pipe(distinctUntilChanged());

  update(newClothes: Clothes[]): void {
    this.clothes.next(newClothes);
  }

  get(): Clothes[] {
    return this.clothes.value;
  }
}
