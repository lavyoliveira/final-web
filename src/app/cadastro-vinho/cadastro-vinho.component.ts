import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CadastroVinhoService } from "../services/cadastro-vinho.service";
import { Vinho } from './vinho'
import { PesquisaService } from "../services/pesquisa.service";

@Component({
  selector: 'app-cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})

export class CadastroVinhoComponent {
  vinho: Vinho = new Vinho
  arrayVinhos: any
  searchType: any

  constructor(private cadastroVinhoService: CadastroVinhoService, private pesquisaService: PesquisaService,
    private router: Router) { }

    getWineByOrigin(originCountry: any) {
      this.searchType = 'origin'
      this.pesquisaService.getWineByOrigin(originCountry).subscribe((data) => {
        this.arrayVinhos = data
      }, err => {
        console.log(err)
      })
    }

  onCadastrar() {


    this.cadastroVinhoService.registerWine(this.vinho).subscribe((data) => {
      alert('Vinho cadastrado com sucesso')
      this.router.navigateByUrl('')
    }, err => {
      if(err.status === 409){
        alert('Vinho já cadastrado')
      }
    })

  }
}
