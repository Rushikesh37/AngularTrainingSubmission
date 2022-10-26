import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup/lib/ng-toast.service';
import { BookapiService } from 'src/app/services/bookapi.service';
import { BookListComponent } from 'src/app/shared/bookList/book-list.component';
import { AdbookdialogComponent } from '../addBook/add.component';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  name = localStorage.getItem('adminName');

  constructor(public dialog: MatDialog, private bookapi: BookapiService, private router: Router) { }

  ngOnInit(): void {
  }


  addBook(){

      this.dialog.open(AdbookdialogComponent, {
        width: '30%'
      }).afterClosed().subscribe(val => {
       this.router.navigate([BookListComponent])
    
       
      });
    }

  }


