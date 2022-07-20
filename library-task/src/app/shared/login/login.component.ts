import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/components/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private matdialog:MatDialog,private toast :NgToastService,private authenticate:AuthService) { }

 userName: string | undefined;
 password: string | undefined;

  ngOnInit() {
  }

  // login() : void {
  //   if(this.username == 'user' && this.password == 'user'){
  //    this.router.navigate(["user"]);
  //    this.toast.success({detail:"login success", summary:"welcome user!!",duration:5000});
  //   }else if (this.username=='admin' && this.password=='admin'){
  //     this.router.navigate(["admin"]);
  //     this.toast.success({detail:"login success", summary:"welcome admin",duration:5000});
  //   }else{
  //     // alert("Invalid credentials");
  //     this.toast.error({detail:"Invalid credential", summary:"username or password incorrect!",duration:5000});
  //   }

  //   this.matdialog.closeAll();
    
  // }

  public onSubmit(form:NgForm){
    console.log(form.value)
    this.authenticate.authenticateEmployee(form.value);
    this.matdialog.closeAll();
  }
  }



