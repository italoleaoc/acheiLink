import { LayoutComponent } from './views/layout/layout.component';
import { GerenciadoLinkComponent } from './core/gerenciado-link/gerenciado-link.component';
import { UserNewComponent } from './core/user-new/user-new.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PaginaComponent } from './views/pagina/pagina.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { PoliticaComponent } from './core/politica/politica.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'politica', component:PoliticaComponent},
  {path:'usernew/0', component:UserNewComponent},
  {path:'usernew/:idUrl', component:UserNewComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  //{path:'gerenciador', component:GerenciadoLinkComponent,canActivate:[AuthGuard]},
  {path:':idUrl', component:PaginaComponent },

  {path:'**', component:PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
