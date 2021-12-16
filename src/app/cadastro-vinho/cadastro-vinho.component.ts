import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CadastroVinhoService } from "../services/cadastro-vinho.service";
import { Vinho } from './vinho'

@Component({
  selector: 'app-cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})

export class CadastroVinhoComponent {
  vinho: Vinho = new Vinho

  constructor(private cadastroVinhoService: CadastroVinhoService,
    private router: Router) { }

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
