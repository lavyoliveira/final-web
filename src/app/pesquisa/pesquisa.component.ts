import { Component } from "@angular/core";
import { PesquisaService } from "../services/pesquisa.service";
import { Vinho } from "./vinho";

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {
  vinho: Vinho = new Vinho
  arrayVinhos: any
  searchType: any

  constructor(private pesquisaService: PesquisaService) { }

  getWineByType(wineType: String) {
    console.log(wineType)
    this.searchType = 'wine'
    this.pesquisaService.getWineByType(wineType).subscribe((data) => {

      this.arrayVinhos = data
    }, err => {
      console.log(err)
      if (err.status === 409) {
        alert('Não existem vinhos desse tipo.')
      }
    })
  }

  getWineByStars(stars: any) {
    this.searchType = 'stars'

    this.pesquisaService.getWineByStars(stars).subscribe((data) => {
      this.vinho.estrelas = stars
      this.arrayVinhos = data
    },
      err => {
        console.log(err)
        if (err.status === 409) {
          alert('Não existem vinhos desse tipo.')
        }
      })

  }

  getWineByGrapeType(grapeType: any) {
    console.log(grapeType)
    this.searchType = 'grape'
    this.pesquisaService.getWineByGrapeType(grapeType).subscribe((data) => {
      console.log(data)
      this.arrayVinhos = data
    }, err => {
      console.log(err)
    })
  }

  getWineByOrigin(originCountry: any) {
    this.searchType = 'origin'
    this.pesquisaService.getWineByOrigin(originCountry).subscribe((data) => {
      this.arrayVinhos = data
    }, err => {
      console.log(err)
    })
  }

  getWineByHarmonizing(harmonizing: any) {
    this.searchType = 'harmonizing'
    this.pesquisaService.getWineByHarmonizing(harmonizing).subscribe((data) => {
      this.arrayVinhos = data
    }, err => {
      console.log(err)
    })
  }


}
