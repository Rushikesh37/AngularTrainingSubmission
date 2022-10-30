import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const bookList=environment.booklist;
const requestList=environment.requestlist;
const issuedBooks=environment.issuebooks;
const categorylist=environment.categorylist;

const userlist=environment.userlist;

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(private http:HttpClient) {}

  postBook(data:any){

    console.log(data)
    return this.http.post<any>(bookList,data)
  }

  postCategory(data:any){
    return this.http.post<any>(categorylist,data)
  }

  getCategory(){
    return this.http.get<any>(categorylist)
  }

  getBook(){
    return this.http.get<any>(bookList)
  }

  getUserList(){
    return this.http.get<any>(userlist)
  }

  // public getEmployee():Observable<EmployeeModel[]> {
  //   return this.http.get<EmployeeModel[]>(this.apiUrl);
  // }

  putBookData(id:number,data:any){
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

