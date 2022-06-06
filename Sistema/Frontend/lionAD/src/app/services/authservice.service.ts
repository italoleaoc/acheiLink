import { GerenciadoLinkComponent } from './../core/gerenciado-link/gerenciado-link.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { GerenciadoLinksService } from './gerenciado-links.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isLog =  false;

  constructor(private gerenciador: GerenciadoLinksService, private userApi: UserserviceService , private router : Router, private snack: SnackbarService) { }


  logar(login:any){
    this.userApi.login(login).subscribe(
      (resp:any)=>{
        sessionStorage.setItem('id', resp.id);
        this.listarPaginas(sessionStorage.getItem('id'));
        this.isLog = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);

        }, 1000);
      }, (err:any)=>{
        this.snack.showSnackBar('Usuário e senha não conferem', 'fechar')
      }

    ),(error:any)=>{


    }

  }
  listarPaginas(id: any){

    this.gerenciador.paginas(id).subscribe(
      (resp:any)=>{
       sessionStorage.setItem('idPage', resp[0][0].id);
       console.log("sessionIdPAge",sessionStorage.getItem('idPage'));
      });
  }

  public isLoged(){
    return this.isLog;

  }
}
