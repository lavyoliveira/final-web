import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getUser(email: any){
    console.log(email)
    return this.http.get(`http://localhost:3000/user/getUser/${email}`)
  }
}
