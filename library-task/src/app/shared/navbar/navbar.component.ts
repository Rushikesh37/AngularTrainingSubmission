import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
  }


  openLoginDialog(){
    this.dialog.open(LoginComponent)
  }


  openRegDialog(){
    this.dialog.open(RegisterComponent);
  }

  openLogin(){
    this.router.navigateByUrl('login')
    
  
    }


  }


