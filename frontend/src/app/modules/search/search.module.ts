import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TuiButtonModule, TuiDropdownModule, TuiLinkModule, TuiScrollbarModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { SearchRoutingModule } from '@modules/search/search-routing.module';
import { ClothesSetCardComponent } from './search-results/clothes-set-card/clothes-set-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { ClothesSetDialogComponent } from './search-results/clothes-set-page/clothes-set-dialog.component';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { JoinModule } from '@shared/pipes/join/join.module';

const TUI_MODULES = [
  TuiButtonModule,
  TuiScrollbarModule,
  TuiDataListWrapperModule,
  TuiDropdownModule,
  TuiSelectModule,
  TuiLinkModule,
  TuiIslandModule,
  TuiCurrencyPipeModule,
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    ClothesSetCardComponent,
    ClothesSetDialogComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    JoinModule,
    TUI_MODULES,
  ]
})
export class SearchModule {
}
