import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira',
  templateUrl: './primeira.component.html',
  styleUrls: ['./primeira.component.css']
})
export class PrimeiraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  nextPage() {
    this.router.navigate(['/desafio-2']);
  }


}
