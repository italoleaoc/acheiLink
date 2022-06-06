import { Router } from '@angular/router';
import { AuthserviceService } from './../../services/authservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginFormDirective") loginFormDirective !: FormGroupDirective;
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authservice: AuthserviceService,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      pwsd:['']
    });
  }

  verificar(){
    var login ={
      email:this.loginForm.value['email'],
      password: this.loginForm.value['pwsd']
    }
this.authservice.logar(login);

}
}
