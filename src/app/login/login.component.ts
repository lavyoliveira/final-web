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
    this.loginService.getUser(login).subscribe((data) => {
      this.loginStatus = data
      if (this.loginStatus.status === 201) {
        alert(this.loginStatus.message)
      }
      else {
        localStorage.setItem('auth', 'S');
        this.router.navigateByUrl('')
      }


    }, err => {
      console.log(err)
    })
  }
}



