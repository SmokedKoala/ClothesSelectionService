import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { DEFAULT_CITY_VALUE } from '@shared/consts/cities-select-values';
import { City } from '@shared/types/city';

@Injectable({
  providedIn: 'root'
})
export class SelectedCityService {
  private readonly city = new BehaviorSubject<City>(DEFAULT_CITY_VALUE);
  readonly city$ = this.city.pipe(distinctUntilChanged());

  update(newCity: City): void {
    this.city.next(newCity);
  }

  get(): City {
    return this.city.value;
  }
}
