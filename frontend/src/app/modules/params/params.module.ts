import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamsComponent } from './params.component';
import { ParamsRoutingModule } from '@modules/params/params-routing.module';
import { TuiButtonModule, TuiDropdownModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClothesDialogComponent } from './edit-clothes-dialog/edit-clothes-dialog.component';


const TUI_MODULES = [
  TuiIslandModule,
  TuiDataListWrapperModule,
  TuiButtonModule,
  TuiNotificationModule,
  TuiSelectModule,
  TuiDropdownModule,
];

@NgModule({
  declarations: [
    ParamsComponent,
    EditClothesDialogComponent
  ],
  imports: [
    CommonModule,
    ParamsRoutingModule,
    ReactiveFormsModule,
    TUI_MODULES,
  ]
})
export class ParamsModule {
}
