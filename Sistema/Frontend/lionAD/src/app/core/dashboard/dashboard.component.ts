import { GerenciadoLinkComponent } from './../gerenciado-link/gerenciado-link.component';
import { Router } from '@angular/router';
import { GerenciadoLinksService } from './../../services/gerenciado-links.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  valorId = sessionStorage.getItem('id') ;
  paginas!: any[];
  idPage = sessionStorage.getItem('idPage');

  constructor(private gerenciador : GerenciadoLinksService,
    private router : Router ) {

    }




  ngOnInit():any {
    this.listarPaginas(this.valorId );
    console.warn('montado no contrutor dashboard', this.idPage, this.valorId);
  }

   listarPaginas(id: any){
      this.gerenciador.paginas(id).subscribe(
      (resp:any)=>{
      sessionStorage.setItem('idPage', resp[0][0].id)
      this.paginas =  Object.values(resp)
    });


  }

}


