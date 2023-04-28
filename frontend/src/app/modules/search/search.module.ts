import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TuiButtonModule, TuiDropdownModule, TuiScrollbarModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { SearchRoutingModule } from '@modules/search/search-routing.module';
import { ClothesSetCardComponent } from './search-results/clothes-set-card/clothes-set-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';

const TUI_MODULES = [
  TuiButtonModule,
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    ClothesSetCardComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    RouterLink,
    TUI_MODULES,
    TuiScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    TuiDataListWrapperModule,
    TuiDropdownModule,
    TuiSelectModule,
  ]
})
export class SearchModule {
}
