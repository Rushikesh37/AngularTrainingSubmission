import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
  }


  openDialog(){
    this.dialog.open(LoginComponent)
  }

  openLogin(){
    this.router.navigateByUrl('login')
    
  
    }


  }


