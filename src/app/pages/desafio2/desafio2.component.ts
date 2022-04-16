import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-desafio2',
  templateUrl: './desafio2.component.html',
  styleUrls: ['./desafio2.component.css']
})
export class Desafio2Component implements OnInit {

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

  }

}
