import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadedImageUrlService {
  readonly imageUrl = new BehaviorSubject<string>('');
  readonly imageUrl$ = this.imageUrl.pipe(distinctUntilChanged());

  // TODO: change to localStorage
  getUrl(): string {
    return this.imageUrl.value;
  }
}
