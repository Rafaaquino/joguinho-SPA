import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-desafio3',
  templateUrl: './desafio3.component.html',
  styleUrls: ['./desafio3.component.css']
})
export class Desafio3Component implements OnInit {

  valor: any;
  id: any;
  valor2: any;
  id2: any;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
  btn6: string;
  cor1: boolean;
  cor2: boolean;
  cor3: boolean;
  cor4: boolean;
  cor5: boolean;
  cor6: boolean;
  btn1Disable: boolean;
  btn2Disable: boolean;
  btn3Disable: boolean;
  btn4Disable: boolean;
  btn5Disable: boolean;
  btn6Disable: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  backPage() {
    this.router.navigate(['/desafio-1']);
  }

  nextPage() {
    this.router.navigate(['/desafio-3']);
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
    console.log(this.valor, this.id, "deu certo")
  }

  clickHandlerNew(id, value){
    this.valor2 = value;
    this.id2 = id;
    if(this.id2 == 'btn4'){
      this.btn5Disable = true;
      this.btn6Disable = true;
      this.cor4 = true
    }
    if(this.id2 == 'btn5'){
      this.btn4Disable = true;
      this.btn6Disable = true;
      this.cor5 = true
    }
    if(this.id2 == 'btn6'){
      this.btn4Disable = true;
      this.btn5Disable = true;
      this.cor6 = true
    }

    console.log(this.valor2, this.id2, "deu certo")
  }

}
