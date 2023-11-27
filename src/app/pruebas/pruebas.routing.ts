import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaColFijaComponent } from './tabla-col-fija/tabla-col-fija.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: TablaColFijaComponent
  },
  {
    path: 'tabla',
    component: TablaColFijaComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }
