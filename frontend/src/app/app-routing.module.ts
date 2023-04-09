import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  },
  {
    path: 'upload',
    loadChildren: () => import('./modules/upload/upload.module').then(m => m.UploadModule)
  },
  {
    path: 'params',
    loadChildren: () => import('./modules/params/params.module').then(m => m.ParamsModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: '**',
    redirectTo: 'upload'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        onSameUrlNavigation: 'reload',
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
