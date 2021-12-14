import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  enteredEmail = '';
  enteredPassword = '';
  @Output() usuarioCadastrado = new EventEmitter();

  onCadastrar(){
    const cadastro = {
      email: this.enteredEmail,
      senha: this.enteredPassword
    };

    this.usuarioCadastrado.emit(cadastro);
  }

}
