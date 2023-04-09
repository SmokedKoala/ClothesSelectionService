import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from '@modules/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UploadRoutingModule {
}
