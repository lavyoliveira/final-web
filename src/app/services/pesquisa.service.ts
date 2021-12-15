import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vinho } from '../pesquisa/vinho';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  constructor(private http: HttpClient) { }
  vinho: Vinho = new Vinho

  public getWineByType(wineType: any) {
    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByType/${wineType}`)
  }

  public getWineByStars(stars: any) {
    if (stars == 'todas') {
      stars = [1, 2, 3, 4, 5]
    }
    return this.http.post(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByStar`, {
      'stars': stars
    })
  }

  public getWineByGrapeType(grapeType: any) {

    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByGrapeType/${grapeType}`)
  }
  public getWineByOrigin(originCountry: any) {

    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByOrigin/${originCountry}`)
  }

  public getWineByHarmonizing(harmonizing: any){
    
    return this.http.get(`https://projetofinalbaldochi.herokuapp.com/wine/getWineByHarmonizing/${harmonizing}`)
  }
}
