import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Cadastro } from '../../model/cadastro'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registerService: ServicesService) { }

  ngOnInit(): void {
    this.createForm(new Cadastro());
  }

  get f() {
    return this.registrationForm.controls;
  }

  createForm(user: Cadastro) {
    this.registrationForm = this.fb.group({
      nome: [user.nome,[Validators.required]],
      uf: [user.uf,[Validators.required]],
      crm: [user.crm,[Validators.required]],
    });
  }

  submitFormLogin() {
    if(this.registrationForm.invalid){
      return;
    }
    else {
      alert("formulario enviado");
      this.registerService.registerUser(this.registrationForm.value.nome, this.registrationForm.value.uf, this.registrationForm.value.crm).subscribe(res =>{
        console.log(res, "retorno cadastro usuario");
        localStorage.setItem('idUser', JSON.stringify(res.idUser));
        this.router.navigate(['/desafio-1']);
      }, error =>{
        alert("CRM Inválida ou já em uso!");
        console.log(error, 'error');
      })
    }

  }

  resetForm() {

  }

}
