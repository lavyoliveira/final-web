import {RouterModule, Routes} from '@angular/router';

import {PesquisaComponent} from './pesquisa/pesquisa.component';
import {LoginComponent} from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VinhoComponent } from './vinho/vinho.component';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MeusVinhosComponent } from './meus-vinhos/meusvinhos.component';

const APP_ROUTES: Routes = [
  { path: '', component: PesquisaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
<<<<<<< HEAD
  { path: 'vinho', component: VinhoComponent},

=======
  { path: 'meusvinhos', component: MeusVinhosComponent}
>>>>>>> 12fd4eac6ce08823afda9a889357b4ee83d28450
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
