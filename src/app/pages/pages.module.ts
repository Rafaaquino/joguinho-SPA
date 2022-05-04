import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './home/home.component';
import { PrimeiraComponent } from './primeira/primeira.component';
import { Desafio2Component } from './desafio2/desafio2.component';
import { Desafio3Component } from './desafio3/desafio3.component';
import { ObrigadoComponent } from './obrigado/obrigado.component';
import { Desafio4Component } from './desafio4/desafio4.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ResultadoImgComponent } from './resultado-img/resultado-img.component';
import { FestaComponent } from './festa/festa.component';
import { ObrigadoFestaComponent } from './obrigado-festa/obrigado-festa.component';
import { ListaPresencaComponent } from './lista-presenca/lista-presenca.component';



@NgModule({
  declarations: [
    PrimeiraComponent,
    HomeComponent,
    Desafio2Component,
    Desafio3Component,
    ObrigadoComponent,
    Desafio4Component,
    ResultadoComponent,
    ResultadoImgComponent,
    FestaComponent,
    ObrigadoFestaComponent,
    ListaPresencaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    PrimeiraComponent,
    HomeComponent,
    Desafio2Component,
    Desafio3Component,
    ObrigadoComponent,
    Desafio4Component,
    ResultadoComponent,
    ResultadoImgComponent,
    FestaComponent,
    ObrigadoFestaComponent,
    ListaPresencaComponent
  ]
})
export class PagesModule { }
