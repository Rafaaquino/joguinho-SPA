import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PrimeiraComponent } from './primeira/primeira.component';
import { Desafio2Component } from './desafio2/desafio2.component';



@NgModule({
  declarations: [
    PrimeiraComponent,
    HomeComponent,
    Desafio2Component
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
    Desafio2Component
  ]
})
export class PagesModule { }
