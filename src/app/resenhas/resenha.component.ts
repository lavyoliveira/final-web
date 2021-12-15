import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ResenhaService} from "../services/resenha.service";
import { Resenha } from './resenha'

@Component({
  selector: 'app-resenha',
  templateUrl: './resenha.component.html',
  styleUrls: ['./resenha.component.css']
})

export class ResenhaComponent {
  resenha: Resenha = new Resenha

  constructor(private resenhaService: ResenhaService,
    private router: Router) { }

  onCadastrar() {

    
    this.resenhaService.registerWine(this.resenha).subscribe((data) => {
      alert('Resenha cadastrada com sucesso')
      this.router.navigateByUrl('')
    }, err => {
        console.log(err)
    })

  }
}
