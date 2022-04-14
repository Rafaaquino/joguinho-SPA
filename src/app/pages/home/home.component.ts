import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from '../model/cadastro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm(new Cadastro());
  }

  get f() {
    return this.registrationForm.controls;
  }

  createForm(user: Cadastro) {
    this.registrationForm = this.fb.group({
      nome: [user.nome,[Validators.required]],
      email: [user.email,[Validators.required, Validators.email]]
    });
  }

  submitFormLogin() {
    if(this.registrationForm.invalid){
      alert("formulario invalido");
      return;
    }
    else {
      alert("formulario enviado");
      this.router.navigate(['/desafio-1']);
    }
  }

  resetForm() {

  }

}
