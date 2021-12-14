import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  usuarioAutenticado: boolean = false;
  constructor(private router: Router) { }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  onEntrar(usuario: Usuario){
    if(usuario.email == 'usuario@email.com' && usuario.senha == '123456')
    {
      this.usuarioAutenticado = true; // disable patch
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
    }
  }
}
