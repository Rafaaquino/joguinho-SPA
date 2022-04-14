import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PrimeiraComponent } from './primeira/primeira.component';



@NgModule({
  declarations: [
    PrimeiraComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrimeiraComponent,
    HomeComponent
  ]
})
export class PagesModule { }
