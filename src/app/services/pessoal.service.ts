import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoalService {

  constructor(private http: HttpClient) { }

  public getReviewByAuthor(email:any) {
    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getReviewByAuthor/${email}`)
  }
}
