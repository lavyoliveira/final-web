import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  enteredValue ='';
  login = 'no content';
  onEntrar(){
    this.login = this.enteredValue;
  }
}
