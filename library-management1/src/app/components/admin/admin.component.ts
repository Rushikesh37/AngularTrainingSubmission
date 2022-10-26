import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticateService } from 'src/app/services/authenticate.service';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookapiService } from 'src/app/services/bookapi.service';
import { AdbookdialogComponent } from './addBook/add.component';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  name = localStorage.getItem('adminName');
  constructor(private router:Router ,public authenticate:AuthenticateService) { }
  showFiller = false;
  showsSidebar=true;
  bookList(){
    this.router.navigateByUrl('booklist')
  }
  logOut(){
    this.router.navigateByUrl('home')
  }
}
