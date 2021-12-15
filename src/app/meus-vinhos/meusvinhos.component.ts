import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MeusVinhosService } from "../services/meus-vinhos.service";

@Component({
  selector: 'app-meusvinhos',
  templateUrl: './meusvinhos.component.html',
  styleUrls: ['./meusvinhos.component.css']
})

export class MeusVinhosComponent {
  vinhos: any
  constructor(private meusVinhosService: MeusVinhosService,
    private router: Router) { }

  ngOnInit() {
    this.meusVinhosService.getWines().subscribe((data) => {
      this.vinhos=data
    }, err => {
      if (err.status === 409) {
        alert('Vinho já cadastrado')
      }
    })
  }
}
