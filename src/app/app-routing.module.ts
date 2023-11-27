import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pruebas',
    loadChildren: () => import('./pruebas/pruebas.module').then((m) => m.PruebasModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'pruebas',
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
