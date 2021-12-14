import {RouterModule, Routes} from '@angular/router';

import {PesquisaComponent} from './pesquisa/pesquisa.component';
import {LoginComponent} from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MeusVinhosComponent } from './meus-vinhos/meusvinhos.component';

const APP_ROUTES: Routes = [
  { path: '', component: PesquisaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'meusvinhos', component: MeusVinhosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
