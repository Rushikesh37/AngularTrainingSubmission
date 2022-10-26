import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router: Router,private matdialog:MatDialog,private toast :NgToastService,private authenticate:AuthenticateService) { }

 email: string | undefined;
 password: string | undefined;

  public onSubmit(form:NgForm){
    this.authenticate.authenticateEmployee(form.value);
    console.log("Hello");
    this.matdialog.closeAll();
  }
}
