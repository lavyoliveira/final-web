import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { MeusVinhosComponent } from './meus-vinhos/meusvinhos.component';
import { routing } from './app.routing';
import { Usuario } from './login/usuario';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {AppRoutingModule } from './app-routing.module';
import {AuthService} from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    PesquisaComponent,
    MeusVinhosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
