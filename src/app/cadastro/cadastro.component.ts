import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';
import { Usuario } from './usuario';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  usuario: Usuario = new Usuario();

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  onCadastrar() {
    const nome = this.usuario.nome
    const email = this.usuario.email
    const senha = this.usuario.senha


    this.cadastroService.registerUser(nome, email, senha).subscribe((data) => {

      alert('Usuario cadastrado com sucesso')
      this.router.navigateByUrl('/login')
    }, err => {
      alert(err.error.message)
    })

  }
}
