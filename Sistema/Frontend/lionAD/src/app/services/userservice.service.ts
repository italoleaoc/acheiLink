import { Usuario } from 'src/_class_model/usuario';
import { Contato } from './../../_class_model/contato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  public getAllUser():Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}alluser`);
  }
  public getUserId(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}iduser/`+id);
  }
  public saveUser(usuario:any):Observable<any>{
    return this.http.post<any>(`${environment.apiBaseEndpointUrl}newuser`, usuario);
  }
  public emailCadastrado(usuario:any):Observable<any>{
    return this.http.post<any>(`${environment.apiBaseEndpointUrl}useremail`, usuario);
  }
  public saveContato(contato:Contato):Observable<Contato>{
    return this.http.post<any>(`${environment.apiBaseEndpointUrl}newcontact`, contato);
  }
  public updateContato(contato:Contato):Observable<Contato>{
    return this.http.put<any>(`${environment.apiBaseEndpointUrl}editcontact`, contato);
  }
  public editUser(usuario:any):Observable<any>{
    return this.http.put<any>(`${environment.apiBaseEndpointUrl}edituser`, usuario);
  }
  public deleteContato(contato:any):Observable<any>{
    return this.http.delete<any>(`${environment.apiBaseEndpointUrl}deletecontato/`+contato);
   }
   public login(login:any):Observable<any>{
     return this.http.post<any>(`${environment.apiBaseEndpointUrl}loginapi/`, login);
   }
}
