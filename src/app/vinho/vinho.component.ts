import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VinhoService } from "../services/vinho.service";

@Component({
  selector: 'app-vinho',
  templateUrl:'./vinho.component.html',
  styleUrls: ['./vinho.component.css']

})
export class VinhoComponent{
  vinho: any
  wine: any
  constructor(private vinhoService: VinhoService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.wine = this.activatedRoute.snapshot.params["name"]
    this.vinhoService.getWineInfo(this.wine).subscribe((data) => {
      this.vinho = data
    }, err => {
      console.log(err)
    })
  }
  saveEmail(email:any){
    localStorage.setItem('search', email)
  }

}
