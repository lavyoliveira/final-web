import { Component, OnInit } from "@angular/core";
import { VinhoService } from "../services/vinho.service";

@Component({
  selector: 'app-vinho',
  templateUrl:'./vinho.component.html',
  styleUrls: ['./vinho.component.css']

})
export class VinhoComponent{
  vinho: any
  constructor(private vinhoService: VinhoService) { }

  ngOnInit() {
    const wine = "Pergola"
    this.vinhoService.getWineInfo(wine).subscribe((data) => {
      this.vinho = data
    }, err => {
      console.log(err)
    })
  }

}
