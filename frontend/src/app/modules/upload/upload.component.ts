import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFileLike } from '@taiga-ui/kit';
import { distinctUntilChanged, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';

@Component({
  selector: 'cls-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadComponent {
  readonly uploadedFileControl = new FormControl();

  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.uploadedFileControl.valueChanges.pipe(
    distinctUntilChanged(),
  );

  constructor(private readonly uploadedImageUrlService: UploadedImageUrlService) {
  }

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.uploadedFileControl.setValue(null);
    this.uploadedImageUrlService.imageUrl = null;
  }

  clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  imageToUrl(file: TuiFileLike): string {
    const uploadedImageUrl = URL.createObjectURL(file as unknown as Blob);

    this.uploadedImageUrlService.imageUrl = uploadedImageUrl;

    return uploadedImageUrl;
  }
}
