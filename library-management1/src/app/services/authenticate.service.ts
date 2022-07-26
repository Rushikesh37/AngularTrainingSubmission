import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';

const register=environment.register;

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  isUser=false;
  isAdmin=false;
  isAuthenticated=false;

  data:any
  user:any
  res:any

  constructor(private http:HttpClient,private router:Router,private toast:NgToastService) { }

  public authenticateEmployee(data:any){
    console.log(data);
    return this.http.get(register).subscribe(res=>{
      this.user=res;
      this.data=data;
      this.authenticateUser();
      this.navigate();
    })
  }

  authenticateUser() {
    this.res=(this.user.find((x:any)=>{
      return x.email==this.data.email && x.password==this.data.password
    }))  
  }

  navigate() {
    if(this.res){
      this.navigateUser();
    }else{
      this.toast.error({detail:"Invalid login Credential; ", summary:"login failed",duration:5000});
    }
  }

  navigateUser(){
    if(this.res.role==='admin'){
      this.isAdmin=true;
      this.isAuthenticated=true;
      this.router.navigate(['admin']),
      localStorage.setItem('adminName',this.res.firstName);
      this.toast.success({detail:"login success", summary:"welcome admin",duration:5000});
    }else if(this.res.role==='user'){
      this.isUser=true;
      this.isAuthenticated=true;
      this.router.navigate(['user']);
      localStorage.setItem('userName',this.res.firstName);
      this.toast.success({detail:"login success", summary:"welcome user",duration:5000});
    } 
  }
}
