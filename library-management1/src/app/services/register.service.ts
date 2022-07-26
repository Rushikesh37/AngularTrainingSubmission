import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const register=environment.register;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { 
  }

  postRegister(data:any){
    return this.http.post<any>(register, data);
  }
}
