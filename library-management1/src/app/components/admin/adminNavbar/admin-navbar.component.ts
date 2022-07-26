import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  name = localStorage.getItem('adminName');
  constructor(private router:Router ,public authenticate:AuthenticateService) { }

  ngOnInit(): void {
  }

  bookList(){
    this.router.navigateByUrl('booklist')
  }
  
  
  logOut(){
    this.router.navigateByUrl('home')
  }

}
