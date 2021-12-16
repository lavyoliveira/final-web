import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { VinhoComponent } from './vinho/vinho.component';
import { CadastroVinhoComponent } from './cadastro-vinho/cadastro-vinho.component';
import { ResenhaComponent } from './resenhas/resenha.component';
import { MeusVinhosComponent } from './meus-vinhos/meusvinhos.component';
import { routing } from './app.routing';
import { Usuario } from './login/usuario';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {AppRoutingModule } from './app-routing.module';
import {AuthService} from './login/auth.service';
import {VinhoService} from './services/vinho.service'
import {LoginService} from './services/login.service'
import {CadastroVinhoService} from './services/cadastro-vinho.service'
import { MeusVinhosService } from './services/meus-vinhos.service';
import { PesquisaService } from './services/pesquisa.service';
import { ResenhaService } from './services/resenha.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    PesquisaComponent,
    VinhoComponent,
    MeusVinhosComponent,
    CadastroVinhoComponent,
<<<<<<< HEAD
    ResenhaComponent
=======
>>>>>>> 71e0c6bbbc439a85c4b6df6aaf6aafff2347321f
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [
    HttpClientModule,
    AuthService,
    VinhoService,
    LoginService,
    CadastroVinhoService,
    MeusVinhosService,
    PesquisaService,
    ResenhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
