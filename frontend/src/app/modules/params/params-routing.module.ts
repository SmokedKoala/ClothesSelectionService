import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamsComponent } from '@modules/params/params.component';

const routes: Routes = [
  {
    path: '',
    component: ParamsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ParamsRoutingModule {
}
