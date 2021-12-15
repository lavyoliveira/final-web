import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getUser(email: any, senha:any){
    console.log(senha)
    return this.http.post(`https://projetofinalbaldochi.herokuapp.com/user/getUser/${email}`, {'password':senha})
  }
}
