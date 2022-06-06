import { Contato } from './../../../_class_model/contato';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Usuario } from 'src/_class_model/usuario';
import {formatDate} from '@angular/common';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  @ViewChild("usuarioFormDirective") usuarioFormGroupDirective !: FormGroupDirective;
  @ViewChild("contatoFormDirective") contatoFormGroupDirective !: FormGroupDirective;
  @Output() tabelaContato:any = [] ;
  @Output() usuarioTitle!: string;
  @Input() valorId: any;

  active = 1;
  public usuarioForm!: FormGroup;
  public contatoForm!: FormGroup;
  public contatos!:Contato ;
  public idUsuario!:any;
  public usuario!: Usuario;

  constructor(private snack: SnackbarService,private formBuilder: FormBuilder,
    private userService: UserserviceService,  private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.valorId = this.route.snapshot.paramMap.get('idUrl');
    this.montarFormulario(this.valorId) ;

  }

montarFormulario(id:any){
  this.usuarioForm = this.formBuilder.group({
    nomeCliente:[''],
    email:[''],
    dtNascimento:[''],
    pwsd:['']
  });
  this.contatoForm = this.formBuilder.group({
    descContato:[''],
    tpContato:['']
  })
  if(id>0){

    this.userService.getUserId(id).subscribe(
      (resp:any)=>{

        const result =  Object.entries(resp);
        const contatos =  Object.entries(resp.User.contatos);

      result.forEach((element:any) => {
        this.usuarioForm = this.formBuilder.group({
          nomeCliente:[element[1]['name_full']],
          email:[element[1]['email']],
          dtNascimento:[element[1]['dt_nascimento']],
          pwsd:[element[1]['password']]
        });

        for (let index = 0; index < contatos.length; index++) {
          const contato :any =  Object.values(resp.User.contatos[index]);
          var contatoTBL : Contato = {
            desc_contato: contato[2],
            tp_contato:contato[3],
            fk_user_id:contato[1]
                }
            this.tabelaContato.push(contatoTBL)
        }


});
      }
    )
  }

}
public saveContato(){

    var contato : Contato = {
      desc_contato:this.contatoForm.value['descContato'],
      tp_contato:this.contatoForm.value['tpContato'],
      fk_user_id:this.valorId
    }
  this.tabelaContato.push(contato);

}

public proximoContato(){
var dataNew = formatDate(this.usuarioForm.value['dtNascimento'], 'YYYY-MM-dd', 'pt-br');
    this.usuario = {
      name_full: this.usuarioForm.value['nomeCliente'],
      email: this.usuarioForm.value['email'],
      dt_nascimento: (dataNew),
      password: this.usuarioForm.value['pwsd'],
      tp_count: '1',
      is_pg_active: '1',
      count_link: 0,
      is_active: 1,
      id: ''

  }
  this.active=2;

  if(this.valorId == null){
    this.userService.emailCadastrado(this.usuario).subscribe(
      (resp:any)=>{
        if(resp.id == 0 ){
        this.snack.showSnackBar("Email já cadastrado", 'Fechar' )
            this.active=1;
        }
        if(resp.id == 1 ){
          this.active = 2;
        }

      }
      ), (err:any)=>{
        console.error(err);
    }

}
}

saveUser(){
  if(this.valorId == null){
    this.userService.saveUser(this.usuario).subscribe(
      (resp:any)=>{
        this.novoContato(resp.id);
        this.router.navigate(['/login']);
        }

    ), (err:any)=>{
      console.warn(err);
    }
  }else{
  var dataNew = formatDate(this.usuarioForm.value['dtNascimento'], 'YYYY-MM-dd', 'pt-br');
  const userEdit = {
    id:this.valorId,
    name_full: this.usuarioForm.value['nomeCliente'],
    email: this.usuarioForm.value['email'],
    dt_nascimento: (dataNew),
    password: this.usuarioForm.value['pwsd'],
  }
  this.userService.editUser(userEdit).subscribe(
    (resp:any)=>{
      console.log(resp.id);
      this.novoContato(this.valorId);


    }
  )
}
}

public novoContato(id:any){
  if(!this.valorId){
    this.tabelaContato.forEach((contato: Contato) => {
      contato.fk_user_id = id;
      this.userService.saveContato(contato).subscribe(
        (resp:any)=>{
        }
      )
    });
    }else{
      this.tabelaContato.forEach((contato: Contato) => {
        contato.fk_user_id = this.valorId;
        this.userService.updateContato(contato).subscribe(
          (resp:any)=>{
            console.log("resps11\n",resp);
          }
        )
      });
  }
}
public deletarContatoTela(desc:any, id:any){
  this.tabelaContato.splice(id,1);
this.userService.deleteContato(desc).subscribe(
  (resp:any)=>{
    console.log(resp)
  }
)
}
resumSave(){
  this.active=3
}
}


