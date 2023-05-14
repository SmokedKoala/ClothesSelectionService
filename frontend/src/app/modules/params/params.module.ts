import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamsComponent } from './params.component';
import { ParamsRoutingModule } from '@modules/params/params-routing.module';
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiNotificationModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiIslandModule, TuiMultiSelectModule, TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClothesDialogComponent } from './edit-clothes-dialog/edit-clothes-dialog.component';
import { EditColorsDialogComponent } from './edit-colors-dialog/edit-colors-dialog.component';
import { TuiPaletteModule } from '@taiga-ui/addon-editor';


const TUI_MODULES = [
  TuiIslandModule,
  TuiDataListWrapperModule,
  TuiButtonModule,
  TuiNotificationModule,
  TuiSelectModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiPaletteModule,
  TuiTextfieldControllerModule,
  TuiMultiSelectModule,
];

@NgModule({
  declarations: [
    ParamsComponent,
    EditClothesDialogComponent,
    EditColorsDialogComponent
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
