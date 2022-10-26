import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LibUser } from '../model/lib-user.model';

const register=environment.register;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { 
  }

  postRegister(data:any):Observable<LibUser>{
    return this.http.post<any>(register, data); 
  }
}
