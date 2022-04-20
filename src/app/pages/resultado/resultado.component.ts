import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  usuarios: any
  constructor(private allUsers: ServicesService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.allUsers.allUsers().subscribe(users => {
      this.usuarios = users;
      console.log(users, 'retorno');
    }, error => {
      console.log(error);
    })
  }

}
