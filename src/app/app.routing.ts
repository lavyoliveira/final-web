import {RouterModule, Routes} from '@angular/router';

import {PesquisaComponent} from './pesquisa/pesquisa.component';
import {LoginComponent} from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VinhoComponent } from './vinho/vinho.component';

import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
  { path: '', component: PesquisaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'vinho', component: VinhoComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
