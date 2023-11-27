import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaColFijaComponent } from './tabla-col-fija/tabla-col-fija.component';
import { RouterModule } from '@angular/router';
import { PruebasRoutingModule } from './pruebas.routing';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule,
    PruebasRoutingModule
  ],
  providers: [
  
  ],
  declarations: [
    TablaColFijaComponent,
    FormularioComponent
  ],
  exports:[]
})
export class PruebasModule { }
