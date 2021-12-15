import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    auth: any
    ok:  any
      
    ngOnInit() {
      
      this.auth = localStorage.getItem('auth')
      return this.auth
      
    }
  
}
