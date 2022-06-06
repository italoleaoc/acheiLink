import { AuthserviceService } from './../../services/authservice.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { GerenciadoLinksService } from 'src/app/services/gerenciado-links.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-gerenciado-link',
  templateUrl: './gerenciado-link.component.html',
  styleUrls: ['./gerenciado-link.component.css']
})

export class GerenciadoLinkComponent implements OnInit {

  @ViewChild("agregadorFormDirective") agregadorFormDirective!: FormGroupDirective;
  public formAgregador!: FormGroup;
  imagem!: File;
  localURl:any;
  background!:any;
  colorFontButton!:any;
  colorButton!:any;
  imgResult:any;
  colorFontTexto!:any
  valorid :any = sessionStorage.getItem('id');

  @Output()titleSite!:any;
  @Output()descSite!:any
  imagemSalva!:any;
  loading!:any;
  idPage: any;


  constructor(private formBuilder: FormBuilder,private snack: SnackbarService,
    private gerenciador:GerenciadoLinksService, private router: Router, private auth: AuthserviceService) {}
    ngOnInit(): void {
      this.idPage = sessionStorage.getItem('idPage');
      console.log('MOntado no gerenciaodor\n', this.idPage);
    this.montarFormulario();
}


public save(){
    const formData: FormData = new FormData();
    formData.append('img_thumb', this.imagem),
    formData.append('id_user', this.valorid),
    formData.append('title_page', this.formAgregador.value['title_page']),
    formData.append('nm_link', this.formAgregador.value['nm_link'].replace(/ /g, "").toLowerCase()),
    formData.append('is_active', this.formAgregador.value['is_active']),
    formData.append('background', this.background),
    formData.append('colorFontButton', this.colorFontButton),
    formData.append('colorButton', this.colorButton),
    formData.append('colorFontTexto', this.colorFontTexto),
    formData.append('desc_link', this.formAgregador.value['desc_link']),
    formData.append('link_one', this.formAgregador.value['link_one']),
    formData.append('link_two', this.formAgregador.value['link_two']),
    formData.append('link_tree', this.formAgregador.value['link_tree']),
    formData.append('link_four', this.formAgregador.value['link_four']),
    formData.append('link_five', this.formAgregador.value['link_five']),
    formData.append('link_six', this.formAgregador.value['link_six']),
    formData.append('link_six', this.formAgregador.value['link_six']),
    formData.append('link_eight', this.formAgregador.value['link_eight']),
    formData.append('link_nine', this.formAgregador.value['link_nine']),
    formData.append('link_teen', this.formAgregador.value['link_teen']),
    formData.append('desc_link', this.formAgregador.value['desc_link']),
    formData.append('name_link_one', this.formAgregador.value['name_link_one']),
    formData.append('name_link_two', this.formAgregador.value['name_link_two']),
    formData.append('name_link_tree', this.formAgregador.value['name_link_tree']),
    formData.append('name_link_four', this.formAgregador.value['name_link_four']),
    formData.append('name_link_five', this.formAgregador.value['name_link_five']),
    formData.append('name_link_six', this.formAgregador.value['name_link_six']),
    formData.append('name_link_six', this.formAgregador.value['name_link_six']),
    formData.append('name_link_eight', this.formAgregador.value['name_link_eight']),
    formData.append('name_link_nine', this.formAgregador.value['name_link_nine']),
    formData.append('name_link_teen', this.formAgregador.value['name_link_teen'])

          this.gerenciador.saveAgregador(formData).subscribe(
            (resp:any)=>{
              if(resp.cod == 1){
                this.snack.showSnackBar("Nome Url já está em uso", "Fechar");
              }else{
                this.snack.showSnackBar("Salvo com sucesso", "Fechar");
                this.router.navigate(['/dashboard']);
              }
            }
          ), (err: any)=>{
            console.log(err);
          }
      }

selectedFiles(event: any){
    this.imagem = <File>event.target.files[0]
      if(event.target.files && event.target.files[0]){
        var reader = new FileReader();
        reader.onload = (event:any)=>{
        this.localURl = event.target.result;
        this.imgResult = reader.result;

    }
    reader.readAsDataURL(event.target.files[0]);


  }

}
descSiteChange(event:any){
this.descSite = event;
}
titleChange(event:any){
  this.titleSite = event;
  }
montarFormulario() {

    if(this.idPage != null ){
      console.warn('montado no formulario', this.idPage);
      this.gerenciador.paginaId(this.idPage).subscribe(
        (resp:any)=>{
          this.background = resp.background;
          this.colorButton = resp.colorButton;
          this.colorFontButton = resp.colorFontButton;
          this.colorFontTexto = resp.colorFontTexto;
          this.imagemSalva = "http://lionsapi.achei.digital"+resp.img_thumb;
          this.titleSite= resp.title_page;
          this.descSite= resp.desc_link


          this.formAgregador = this.formBuilder.group({
            nm_link:[resp.nm_link],
            title_page:[resp.title_page],
            is_active:[resp.is_active],
            img_thumb:[resp.img_thumb],
            background:[this.background],
            colorFontButton:[this.colorFontButton],
            colorButton:[this.colorButton],
            colorFontTexto:[this.colorFontTexto],
            desc_link:[resp.desc_link ||''],
            link_one:[resp.link_one ||''],
            link_two:[resp.link_two ||''],
            link_tree:[resp.link_tree ||''],
            link_four:[resp.link_four ||''],
            link_five:[resp.link_five ||''],
            link_six:[resp.link_six ||''],
            link_seven:[resp.link_seven ||''],
            link_eight:[resp.link_eight ||''],
            link_nine:[resp.link_nine ||''],
            link_teen:[resp.link_teen ||''],
            name_link_one:[resp.name_link_one ||''],
            name_link_two:[resp.name_link_two ||''],
            name_link_tree:[resp.name_link_tree ||''],
            name_link_four:[resp.name_link_four ||''],
            name_link_five:[resp.name_link_five ||''],
            name_link_six:[resp.name_link_six ||''],
            name_link_seven:[resp.name_link_seven ||''],
            name_link_eight:[resp.name_link_eight ||''],
            name_link_nine:[resp.name_link_nine ||''],
            name_link_teen:[resp.name_link_teen ||''],
          })
            this.loading = true;
            console.log("Loading com dados", this.loading);
          });
    }else{

      this.formAgregador = this.formBuilder.group({
        nm_link:[''],
        title_page:[''],
        is_active:[''],
        img_thumb:[''],
        background:[''],
        desc_link:[''],
        link_one:[''],
        link_two:[''],
        link_tree:[''],
        link_four:[''],
        link_five:[''],
        link_six:[''],
        link_seven:[''],
        link_eight:[''],
        link_nine:[''],
        link_teen:[''],
        colorFontButton:[''],
        colorButton:[''],
        colorFontTexto:[''],
        name_link_one:[''],
        name_link_two:[''],
        name_link_tree:[''],
        name_link_four:[''],
        name_link_five:[''],
        name_link_six:[''],
        name_link_seven:[''],
        name_link_eight:[''],
        name_link_nine:[''],
        name_link_teen:[''],


      });

      this.loading =true;
      console.log("Loading", this.loading);

    }
}
atualizarPagina(id:any){
  const formDataAtualiza: FormData = new FormData();
  formDataAtualiza.append('img_thumb', this.imagem),
  formDataAtualiza.append('id_user', this.valorid),
  formDataAtualiza.append('title_page', this.formAgregador.value['title_page']),
  formDataAtualiza.append('nm_link', this.formAgregador.value['nm_link'].replace(/ /g, "").toLowerCase()),
  formDataAtualiza.append('is_active', this.formAgregador.value['is_active']),
  formDataAtualiza.append('background', this.background),
  formDataAtualiza.append('colorFontButton', this.colorFontButton),
  formDataAtualiza.append('colorButton', this.colorButton),
  formDataAtualiza.append('colorFontTexto', this.colorFontTexto),
  formDataAtualiza.append('desc_link', this.formAgregador.value['desc_link']),
  formDataAtualiza.append('link_one', this.formAgregador.value['link_one']),
  formDataAtualiza.append('link_two', this.formAgregador.value['link_two']),
  formDataAtualiza.append('link_tree', this.formAgregador.value['link_tree']),
  formDataAtualiza.append('link_four', this.formAgregador.value['link_four']),
  formDataAtualiza.append('link_five', this.formAgregador.value['link_five']),
  formDataAtualiza.append('link_six', this.formAgregador.value['link_six']),
  formDataAtualiza.append('link_six', this.formAgregador.value['link_six']),
  formDataAtualiza.append('link_eight', this.formAgregador.value['link_eight']),
  formDataAtualiza.append('link_nine', this.formAgregador.value['link_nine']),
  formDataAtualiza.append('link_teen', this.formAgregador.value['link_teen']),
  formDataAtualiza.append('desc_link', this.formAgregador.value['desc_link']),
  formDataAtualiza.append('name_link_one', this.formAgregador.value['name_link_one']),
  formDataAtualiza.append('name_link_two', this.formAgregador.value['name_link_two']),
  formDataAtualiza.append('name_link_tree', this.formAgregador.value['name_link_tree']),
  formDataAtualiza.append('name_link_four', this.formAgregador.value['name_link_four']),
  formDataAtualiza.append('name_link_five', this.formAgregador.value['name_link_five']),
  formDataAtualiza.append('name_link_six', this.formAgregador.value['name_link_six']),
  formDataAtualiza.append('name_link_six', this.formAgregador.value['name_link_six']),
  formDataAtualiza.append('name_link_eight', this.formAgregador.value['name_link_eight']),
  formDataAtualiza.append('name_link_nine', this.formAgregador.value['name_link_nine']),
  formDataAtualiza.append('name_link_teen', this.formAgregador.value['name_link_teen']),
  formDataAtualiza.append('idPage', id)
  console.log("FormData Atualizada",formDataAtualiza)
    this.gerenciador.updateAgregador(formDataAtualiza).subscribe(
        (resp:any)=>{
          if(resp.cod == 1){
            this.snack.showSnackBar("Nome Url já está em uso", "Fechar");
          }else{
            this.router.navigate(['/dashboard']);
            this.snack.showSnackBar("Atualizado com sucesso", "Fechar");

          }
        }
      ), (err: any)=>{
        console.log(err);
      }
}
}
