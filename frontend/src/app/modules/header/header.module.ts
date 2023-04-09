import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

const TUI_MODULES = [
  TuiSvgModule,
  TuiLinkModule
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TUI_MODULES,
  ]
})
export class HeaderModule {
}
