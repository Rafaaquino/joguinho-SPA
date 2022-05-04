import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-primeira',
  templateUrl: './primeira.component.html',
  styleUrls: ['./primeira.component.css']
})
export class PrimeiraComponent implements OnInit {

  name: string = localStorage.getItem('name');
  uf: string = localStorage.getItem('uf');
  crm: string = localStorage.getItem('crm');
  imagem1: string;
  imagem2: string;
  imagem3: string;

  constructor(private router: Router, private services: ServicesService ) { }

  ngOnInit(): void {
    this.imagem1 = this.imagem1.replace("data:image/png;base64,", "");
    this.imagem2 = this.imagem2.replace("data:image/png;base64,", "");
    this.imagem3 = this.imagem3.replace("data:image/png;base64,", "");
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  nextPage() {
    this.imagem1 = localStorage.getItem('imgCanva');
    this.imagem2 = localStorage.getItem('imgCanva2');
    this.imagem3 = localStorage.getItem('imgCanva3');

    this.imagem1 = this.imagem1.replace("data:image/png;base64,", "");
    this.imagem2 = this.imagem2.replace("data:image/png;base64,", "");
    this.imagem3 = this.imagem3.replace("data:image/png;base64,", "");


    this.services.desafioImagem(this.name, this.uf, Number(this.crm), this.imagem1, this.imagem2, this.imagem3).subscribe(res => {
      console.log(res);
      this.router.navigate(['/obrigado']);
    }, error => {
      console.log(error);
      alert('Algo de errado, precisa clicar em gravar imagem');
    });

  }
}
