import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cadastro } from '../model/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  readonly baseUrlCadastro: string = 'https://app-alekito.herokuapp.com/alekito/createAccount';
  readonly baseUrl: string = 'https://app-alekito.herokuapp.com/alekito';

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

  desafio1(idUser: number, questao1: string) {

    let body = {
      "idUser": idUser,
      "question1": questao1
    }

    const url = `${this.baseUrlCadastro}/step2`;

    return this.http.post<any>(url, body)
      .pipe(map(desafio1 => {
        return desafio1;
      }));
  }

  desafio2(idUser: number, questao1: string, questao2: string) {

    let body = {
      "idUser": idUser,
      "question1": questao1,
      "question2": questao2
    }

    const url = `${this.baseUrlCadastro}/step3`;

    return this.http.post<any>(url, body)
      .pipe(map(desafio2 => {
        return desafio2;
      }));
  }

  desafio3(idUser: number, questao1: string) {

    let body = {
      "idUser": idUser,
      "question1": questao1
    }

    const url = `${this.baseUrlCadastro}/step`;

    return this.http.post<any>(url, body)
      .pipe(map(desafio3 => {
        return desafio3;
      }));
  }

  desafioImagem(name: string, uf: string, crm: number, image1: string, image2: string, image3: string) {

    let body = {
      "name": name,
      "uf": uf,
      "crm": crm,
      "image1": image1,
      "image2": image2,
      "image3": image3
    }

    const url = `${this.baseUrlCadastro}/step5`;

    return this.http.post<any>(url, body)
      .pipe(map(desafioImage => {
        return desafioImage;
      }));
  }

  festaUsuario(uf: string, crm: number){
    let body = {
      "name": "Usuario da festa",
      "uf": uf,
      "crm": crm,
      "image1": "",
      "image2": "",
      "image3": ""
    }

    const url = `${this.baseUrlCadastro}/step5`;

    return this.http.post<Cadastro>(url, body)
      .pipe(map(cadastroFesta => {
        return cadastroFesta;
      }));
  }

  allImages() {
    const url = `${this.baseUrl}/getAllImages`;

    return this.http.get<any>(url)
      .pipe(map(usuariosImage => {
        return usuariosImage;
      }));
  }

  allUsers() {
    const url = `${this.baseUrl}/getAllUsers`;

    return this.http.get<any>(url)
      .pipe(map(usuarios => {
        return usuarios;
      }));
  }
}
