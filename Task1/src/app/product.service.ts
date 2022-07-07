import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  subject=new Subject()

  constructor(private http:HttpClient) { }

  saveData(message:any){
    return this.subject.next(message);

  }

  // receiveMessage():Observable<String>{
  //   return this.subject.asObservable();

  // }
}
