import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadRoutingModule } from '@modules/upload/upload-routing.module';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';

const TUI_MODULES = [
  TuiInputFilesModule,
  TuiButtonModule,
  TuiNotificationModule,
];

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    ReactiveFormsModule,
    TUI_MODULES,
  ]
})
export class UploadModule {
}
