import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private matdialog:MatDialog) { }

 username: string | undefined;
 password: string | undefined;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'user' && this.password == 'user'){
     this.router.navigate(["user"]);
    }else if (this.username=='admin' && this.password=='admin'){
      this.router.navigate(["admin"]);
    }else{
      alert("Invalid credentials");
    }

    this.matdialog.closeAll();
    
  }
  }



