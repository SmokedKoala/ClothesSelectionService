import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { possibleShops } from '@shared/consts/possible-shops';

@Injectable({
  providedIn: 'root'
})
export class SelectedShopsService {
  private readonly shops = new BehaviorSubject<string[]>(possibleShops);
  readonly shops$: Observable<string[]> = this.shops.pipe(distinctUntilChanged());

  update(newShops: string[]): void {
    this.shops.next(newShops);
  }

  get(): string[] {
    return this.shops.value;
  }
}
