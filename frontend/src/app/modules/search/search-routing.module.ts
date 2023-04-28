import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from '@modules/search/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SearchRoutingModule {
}
