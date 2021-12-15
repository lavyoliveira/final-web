import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeusVinhosService {

  constructor(private http: HttpClient) { }
 
  email = localStorage.getItem('email')
  public getWines(){
    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByAuthor/${this.email}`)
  }
}
