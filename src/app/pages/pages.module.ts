import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PrimeiraComponent } from './primeira/primeira.component';
import { Desafio2Component } from './desafio2/desafio2.component';
import { Desafio3Component } from './desafio3/desafio3.component';
import { ObrigadoComponent } from './obrigado/obrigado.component';
import { Desafio4Component } from './desafio4/desafio4.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    PrimeiraComponent,
    HomeComponent,
    Desafio2Component,
    Desafio3Component,
    ObrigadoComponent,
    Desafio4Component,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrimeiraComponent,
    HomeComponent,
    Desafio2Component,
    Desafio3Component,
    ObrigadoComponent,
    Desafio4Component,
    ResultadoComponent
  ]
})
export class PagesModule { }
