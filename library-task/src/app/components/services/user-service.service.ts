import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }


  requestBook(data:any){
    return this.http.post<any>(" http://localhost:3000/requestlist",data)
  }


  getIssuedBook(){

    return this.http.get<any>(" http://localhost:3000/issuedBooks")

  }
}
