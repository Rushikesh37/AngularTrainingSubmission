import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

// const oldregister=environment.oldregister;
const loginapi=environment.login;

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
  tokenData:any
  decodedToken:any
  Res:any

  constructor(private http:HttpClient,private router:Router,private toast:NgToastService,private login:LoginService) { }

  public authenticateEmployee(data:any){

    return this.login.postLogin(data).subscribe(res=>{
      localStorage.setItem('Jwt',res.result);

      this.tokenData=localStorage.getItem('Jwt');

      this.decodedToken=this.getDecodedAccessToken(this.tokenData)

      console.log(this.decodedToken);
    
      this.navigate();
    })
  }



  navigate() {
    if(this.tokenData){
      this.navigateUser();
    }else{
      this.toast.error({detail:"Invalid login Credential; ", summary:"login failed",duration:5000});
    }
  }

  navigateUser(){
   
    if(this.decodedToken.roleId==='1'){
      this.isAdmin=true;
      this.isAuthenticated=true;
      this.router.navigate(['admin/booklist']);
      localStorage.setItem('adminName',this.decodedToken.name);
      localStorage.setItem('adminId',this.decodedToken.userId);

      this.toast.success({detail:"login success", summary:"welcome admin",duration:5000});
    }else if(this.decodedToken.roleId==='2'){
      this.isUser=true;
      this.isAuthenticated=true;
      this.router.navigate(['user/booklist']);
      localStorage.setItem('userName',this.decodedToken.name);
      localStorage.setItem('userId',this.decodedToken.userId);
      this.toast.success({detail:"login success", summary:"welcome user",duration:5000});
    } 
  }


  getDecodedAccessToken(token:any) {

    const helper = new JwtHelperService();

     return helper.decodeToken(token);

     


      // JSON.parse(atob(token));

      // console.log(JSON.parse(atob(token)));
    // try {
    //  return  jwt_decode(token);
  

    // } catch(Error) {
    //   return null;
    // }
  }
}
