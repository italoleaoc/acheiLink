import { AuthserviceService } from './services/authservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './views/footer/footer.component';
import { NavComponent } from './views/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { UserComponent } from './core/user/user.component';
import { UserNewComponent } from './core/user-new/user-new.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { GerenciadoLinkComponent } from './core/gerenciado-link/gerenciado-link.component';
import { PaginaComponent } from './views/pagina/pagina.component';
import { LayoutComponent } from './views/layout/layout.component';
import { SafePipe } from './safe.pipe';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { LoginComponent } from './core/login/login.component';
import {AuthGuard} from './services/auth.guard';
import { PoliticaComponent } from './core/politica/politica.component';
import { PoliticaDialogComponent } from './views/politica-dialog/politica-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    UserComponent,
    UserNewComponent,
    GerenciadoLinkComponent,
    PaginaComponent,
    LayoutComponent,
    SafePipe,
    LoginComponent,
    PoliticaComponent,
    PoliticaDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    ColorPickerModule,
    YouTubePlayerModule,
    MatDialogModule,
    NgxMaskModule.forRoot()


  ],
  providers: [AuthGuard,AuthserviceService,
    {provide: LOCALE_ID, useValue:'pt-BR'},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
