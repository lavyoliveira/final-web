import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResenhaService {
  
  constructor(private http: HttpClient) { }

  public registerReview(nome:string, email:any, senha:any) {
 
    return this.http.post(`https://projetofinalbaldochi.herokuapp.com/user/register`, {
      "name": nome,
      "email": email,
      "password": senha,
    })
  }
}
