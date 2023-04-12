import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';


@Injectable({
  providedIn: 'root'
})
export class UploadedImageUrlService {
  private readonly storageKey: string = 'uploadedToClothesSelectionServiceImageUrl';

  constructor(@Inject(LOCAL_STORAGE) private readonly localStorage: Storage) {
  }

  get imageUrl(): string | null {
    return this.localStorage.getItem(this.storageKey);
  }

  set imageUrl(url: string | null) {
    if (url) {
      this.localStorage.setItem(this.storageKey, url);
    } else {
      this.clear();
    }
  }

  private clear(): void {
    this.localStorage.removeItem(this.storageKey);
  }
}
