import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const bookList=environment.booklist;
const requestList=environment.requestlist;
const issuedBooks=environment.issuebooks;

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(private http:HttpClient) {}


  postBook(data:any){
    return this.http.post<any>(bookList,data)
  }

  getBook(){
    return this.http.get<any>(bookList)
  }

  putBookData(data:any,id:number){
    return this.http.put<any>(bookList+id,data);
}

  deleteBook(id:number){
    return this.http.delete<any>(bookList +id);
  }

  getRequest(){
    return this.http.get<any>(requestList)
  }

  issuedBook(data:any){   
    return this.http.post<any>(issuedBooks,data)
  }

  getIssuedBooks(){
    return this.http.get<any>(issuedBooks)
  }
  
  deleteRequestedBook(id:number){
    return this.http.delete<any>(requestList +id);
  }
}

