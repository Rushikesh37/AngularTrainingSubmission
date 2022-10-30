import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const requestList=environment.requestlist;
const issuedBooks=environment.issuebooks;


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }


  requestBook(data:any){
    return this.http.post<any>(requestList,data)
  }


  getIssuedBook(){
    return this.http.get<any>(issuedBooks)
  }

  getIssuedBookById(id:number){
    return this.http.get<any>(issuedBooks+id);
  }
}
