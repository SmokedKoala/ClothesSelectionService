import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFileLike } from '@taiga-ui/kit';
import { distinctUntilChanged, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cls-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadComponent {
  uploadedImageUrl: string | null = null;
  readonly uploadedFileControl = new FormControl();

  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.uploadedFileControl.valueChanges.pipe(
    distinctUntilChanged(),
  );

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.uploadedFileControl.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  imageToUrl(file: TuiFileLike): string {
    this.uploadedImageUrl = URL.createObjectURL(file as unknown as Blob);

    return this.uploadedImageUrl;
  }
}
