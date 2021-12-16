import {RouterModule, Routes} from '@angular/router';

import {PesquisaComponent} from './pesquisa/pesquisa.component';
import {LoginComponent} from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VinhoComponent } from './vinho/vinho.component';
import { CadastroVinhoComponent} from './cadastro-vinho/cadastro-vinho.component';
import { ResenhaComponent } from './resenhas/resenha.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MeusVinhosComponent } from './meus-vinhos/meusvinhos.component';


const APP_ROUTES: Routes = [
  { path: '', component: PesquisaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'vinho/:name', component: VinhoComponent},
  { path: 'meusvinhos', component: MeusVinhosComponent},
  { path: 'cadastrovinho', component: CadastroVinhoComponent},
<<<<<<< HEAD
  { path: 'resenha/:name', component:ResenhaComponent}
=======
>>>>>>> 71e0c6bbbc439a85c4b6df6aaf6aafff2347321f
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
