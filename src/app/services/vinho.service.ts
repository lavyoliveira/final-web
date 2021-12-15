import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinhoService {

  constructor(private http: HttpClient) { }
  
  public getWineInfo(wine: any){
    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByName/${wine}`)
  }
}
