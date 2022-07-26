import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  @Input()
  name: string | undefined;
  userName = localStorage.getItem('userName');
  constructor(private router:Router,public authenticate:AuthenticateService,private http:HttpClient) { }
 
  ngOnInit(): void {

  }

  bookList(){
    this.router.navigateByUrl('booklist')
  }
  logOut(){
    this.router.navigateByUrl('home')
  }

}
