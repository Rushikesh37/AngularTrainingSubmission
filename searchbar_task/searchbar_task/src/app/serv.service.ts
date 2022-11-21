import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/EmployeeName')
      .pipe(
        map((response:[]) => response.map(item => item['employee']))
      )
  }
}
