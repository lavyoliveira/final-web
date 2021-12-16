import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ResenhaService} from "../services/resenha.service";
import { Resenha } from './resenha'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-resenha',
  templateUrl: './resenha.component.html',
  styleUrls: ['./resenha.component.css']
})

export class ResenhaComponent {
  resenha: Resenha = new Resenha

  constructor(private resenhaService: ResenhaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit(){
        this.resenha.productName = this.activatedRoute.snapshot.params["name"]
    }
  onCadastrar() {

    
    this.resenhaService.registerReview(this.resenha.productName, this.resenha.nome, this.resenha.email, this.resenha.resenha, this.resenha.estrelas).subscribe((data) => {
      alert('Resenha cadastrada com sucesso')
      this.router.navigateByUrl('')
    }, err => {
        console.log(err)
    })

  }
}
