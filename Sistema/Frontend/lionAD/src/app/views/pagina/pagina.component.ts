import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerenciadoLinksService } from 'src/app/services/gerenciado-links.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})


export class PaginaComponent implements OnInit {
  id!:any;
  @Output() pagina:any = [];
  @Output() links:any = [];
  @Output() nameLinks:any = [];
  panelOpenState= false;
  constructor(private gerenciador:GerenciadoLinksService,private route: ActivatedRoute, private rota:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('idUrl');
    this.montarPagina(this.id);
    }

public montarPagina(id: any){
 this.gerenciador.searchUrl(id).subscribe(
   (resp:any)=>{
      this.pagina = resp;
      this.pagina[0].img_thumb = "http://localhost:8000"+this.pagina[0].img_thumb;
      let linksAninhados = Object.values(this.pagina[0]);
      this.links = linksAninhados.slice(10,20);
      this.nameLinks = linksAninhados.slice(20,30);


    }, (err:any)=>{

      this.rota.navigate(['**']);
    }
 )
}

}
