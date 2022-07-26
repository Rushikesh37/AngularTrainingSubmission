import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openLogin(){
    this.dialog.open(LoginComponent);
  }

  openReg(){
    this.dialog.open(RegistrationComponent)
  }

  

 

}
