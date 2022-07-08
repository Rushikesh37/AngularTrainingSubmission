import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(private http:HttpClient) {}


  postBook(data:any){
    return this.http.post<any>(" http://localhost:3000/booklist/",data)
  }

  getBook(){
    return this.http.get<any>(" http://localhost:3000/booklist/")
  }


  putBookData(data:any,id:number){

    return this.http.put<any>(" http://localhost:3000/booklist/"+id,data);


}

  deleteBook(id:number){

    return this.http.delete<any>(" http://localhost:3000/booklist/" +id);

  }



  getRequest(){

    return this.http.get<any>(" http://localhost:3000/requestlist")

  }


  
  issuedBook(data:any){
    return this.http.post<any>(" http://localhost:3000/issuedBooks",data)
  }





}

