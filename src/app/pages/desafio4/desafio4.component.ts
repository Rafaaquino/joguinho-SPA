import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desafio4',
  templateUrl: './desafio4.component.html',
  styleUrls: ['./desafio4.component.css']
})
export class Desafio4Component implements OnInit {

  valor: any;
  id: any;
  btn1: string;
  btn2: string;
  btn3: string;
  cor1: boolean;
  cor2: boolean;
  cor3: boolean;
  btn1Disable: boolean;
  btn2Disable: boolean;
  btn3Disable: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  backPage() {
    this.router.navigate(['/desafio-2']);
  }

  nextPage() {
    this.router.navigate(['/obrigado']);
  }

  clickHandler(id, value) {
    this.valor = value;
    this.id = id;
    if(this.id == 'btn1'){
      this.btn2Disable = true;
      this.btn3Disable = true;
      this.cor1 = true
    }
    if(this.id == 'btn2'){
      this.btn1Disable = true;
      this.btn3Disable = true;
      this.cor2 = true
    }
    if(this.id == 'btn3'){
      this.btn2Disable = true;
      this.btn1Disable = true;
      this.cor3 = true
    }
    console.log(this.valor, "deu certo")
  }
}
