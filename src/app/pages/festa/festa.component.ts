import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Cadastro } from '../../model/cadastro'

@Component({
  selector: 'app-festa',
  templateUrl: './festa.component.html',
  styleUrls: ['./festa.component.css']
})
export class FestaComponent implements OnInit {

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
      uf: [user.uf,[Validators.required]],
      crm: [user.crm,[Validators.required]],
    });
  }

  submitFormLogin() {
    if(this.registrationForm.invalid){
      alert("Erro, Tente novamente");
      return;
    }
    else {

      this.registerService.festaUsuario(this.registrationForm.value.uf, this.registrationForm.value.crm).subscribe(res =>{
        console.log(res, "retorno festa");
        this.router.navigate(['/inscricao-festa']);
      }, error =>{
        alert("CRM Inválida ou já em uso!");
        console.log(error, 'error');
      })
    }

  }

  resetForm() {

  }

}
