import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroVinhoService {

  constructor(private http: HttpClient) { }

  public registerWine(vinho: any) {
    const email = localStorage.getItem('email');
    
    return this.http.post(`https://projetofinalbaldochi.herokuapp.com/wine/registerWine`, {
      "email": email,
      "productName": vinho.nome,
      "originCountry": vinho.pais,
      "wineType": vinho.tipo,
      "grapeType": vinho.uva,
      "image": vinho.file,
      "harmonizing": [
        "Frango"
      ],
      "price": vinho.preco,
      "rating": 0,
      "vinicula": vinho.vinicula
    })
  }

}
