import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PessoalService } from "../services/pessoal.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.component.html',
  styleUrls: ['./pessoal.component.css']
})

export class PessoalComponent {
  arrayReview: any
  email: any
  name : any
  constructor(private pessoalService: PessoalService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.email = localStorage.getItem('search')
    this.name = this.activatedRoute.snapshot.params["name"]

    this.pessoalService.getReviewByAuthor(this.email).subscribe((data) => {
        console.log(data)
      this.arrayReview=data
    }, err => {
      console.log(err)
    })
  }
}
