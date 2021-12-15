import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent {
  usuario: Usuario = new Usuario();
  loginStatus: any
  constructor(private loginService: LoginService,
    private router: Router) { }


  onEntrar() {
    const login = this.usuario.email
    const senha = this.usuario.senha
    this.loginService.getUser(login, senha).subscribe((data) => {
      this.loginStatus = data
      console.log(data)
      if (this.loginStatus.status === 201) {
        alert(this.loginStatus.message)
      }
      else {
        localStorage.setItem('auth', 'S');
        localStorage.setItem('email', login);
        this.router.navigateByUrl('')
      }


    }, err => {
      console.log(err)
    })
  }
}



