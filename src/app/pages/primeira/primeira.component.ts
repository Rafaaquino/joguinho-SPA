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
  imagem1: string = localStorage.getItem('imgCanva');
  imagem2: string = localStorage.getItem('imgCanva');
  imagem3: string = localStorage.getItem('imgCanva');

  constructor(private router: Router, private services: ServicesService ) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  nextPage() {

    this.services.desafioImagem(this.name, this.uf, Number(this.crm), this.imagem1, this.imagem2, this.imagem3).subscribe(res => {
      console.log(res);
      this.router.navigate(['/obrigado']);
    }, error => {
      console.log(error);
      alert('Algo de errado, precisa clicar em gravar imagem');
    });

  }
}
