import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const loginapi=environment.login;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  constructor(private http:HttpClient) { }

  postLogin(data:any){
    return this.http.post<any>(loginapi,data); 
  }
}
