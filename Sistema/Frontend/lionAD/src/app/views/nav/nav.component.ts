import { Router } from '@angular/router';
import { AuthGuard } from './../../services/auth.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  id = sessionStorage.getItem('id');
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  sair(){
    sessionStorage.clear();
    this.router.navigate(['/'])

  }
}
