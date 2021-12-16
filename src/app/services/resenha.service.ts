import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResenhaService {
  
  constructor(private http: HttpClient) { }

  public registerReview(productName:any, nome:string, email:any, resenha:any, estrelas:any) {
 
    return this.http.post(`https://projetofinalbaldochi.herokuapp.com/wine/addReview/${productName}`, {
      "name": nome,
      "email": email,
      "review": resenha,
      "stars": estrelas,
    })
  }
}
