import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthserviceService } from './authservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../core/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private snack:SnackbarService, private autservice : AuthserviceService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
    let isLoggedIn = this.autservice.isLoged();
    if (isLoggedIn){
      return true;
    }
    return false;
  }

}
