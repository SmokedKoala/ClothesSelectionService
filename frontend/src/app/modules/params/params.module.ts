import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamsComponent } from './params.component';
import { ParamsRoutingModule } from '@modules/params/params-routing.module';
import { TuiButtonModule, TuiDropdownModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParamsComponent
  ],
  imports: [
    CommonModule,
    ParamsRoutingModule,
    TuiButtonModule,
    TuiNotificationModule,
    TuiIslandModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDropdownModule,
  ]
})
export class ParamsModule {
}
