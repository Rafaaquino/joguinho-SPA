import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PrimeiraComponent } from './pages/primeira/primeira.component';
import { Desafio2Component } from './pages/desafio2/desafio2.component';
import { Desafio3Component } from './pages/desafio3/desafio3.component';
import { Desafio4Component } from './pages/desafio4/desafio4.component';
import { ObrigadoComponent } from './pages/obrigado/obrigado.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'desafio-assinatura', component: PrimeiraComponent },
  { path: 'desafio-1', component: Desafio2Component },
  { path: 'desafio-2', component: Desafio3Component },
  { path: 'desafio-3', component: Desafio4Component },
  { path: 'obrigado', component: ObrigadoComponent }

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
