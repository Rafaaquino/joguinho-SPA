import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cadastro } from '../model/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  readonly baseUrlCadastro: string = 'https://app-alekito.herokuapp.com//alekito/createAccount'

  constructor(private router: Router, private http: HttpClient) { }

  registerUser(nome: string, uf: number , crm: string) {

    let body = {
      "name": nome,
      "uf": uf,
      "crm": crm
    }

    const url = `${this.baseUrlCadastro}/step1`;

    return this.http.post<Cadastro>(url, body)
      .pipe(map(cadastro => {
        return cadastro;
      }));
  }

  desafio1(idUser: number, questao1: string, questao2: string) {

    let body = {
      idUser: idUser,
      question1: questao1,
      question2: questao2
    }

    const url = `${this.baseUrlCadastro}/step2`;

    return this.http.post<any>(url, body)
      .pipe(map(desafio1 => {
        return desafio1;
      }));
  }
}
