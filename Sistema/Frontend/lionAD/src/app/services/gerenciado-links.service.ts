import { Agregador } from './../../_class_model/agregador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadoLinksService {


  constructor(private http: HttpClient) { }

  public saveAgregador(agregador:any):Observable<any>{
    return this.http.post<any>(`${environment.apiBaseEndpointUrl}salvarlink`, agregador);
  }
  public searchUrl(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}procurarpagina/`+ id);
  }
  public paginas(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}paginas/`+ id);
  }
   public paginaId(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}paginaid/`+ id);
  }
  public updateAgregador(agregador:any):Observable<any>{
    return this.http.post<any>(`${environment.apiBaseEndpointUrl}editpagina`, agregador);
  }
}
