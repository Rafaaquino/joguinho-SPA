import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-desafio4',
  templateUrl: './desafio4.component.html',
  styleUrls: ['./desafio4.component.css']
})
export class Desafio4Component implements OnInit {

  idUser: number;
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

  constructor(private router: Router, private desafioService: ServicesService) { }

  ngOnInit(): void {
    let recebe = localStorage.getItem('idUser');
    this.idUser = Number(recebe);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  backPage() {
    this.router.navigate(['/desafio-2']);
  }

  nextPage() {
    this.desafioService.desafio3(this.idUser, this.valor).subscribe(res => {
      console.log(res, 'retorno');
      this.router.navigate(['/obrigado']);
    }, error => {
      alert('Algo deu errado tente novamente!');
      console.log(error, 'error');
    })
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
