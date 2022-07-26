import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookapiService } from 'src/app/services/bookapi.service';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','discription','quantity'];
  dataSource!: MatTableDataSource<any>;
  actionbtn:string="List Of Books";

  constructor(private bookapi:BookapiService,private router:Router,private toast :NgToastService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
     getAllBooks(){
        this.bookapi.getBook().subscribe({
        next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
        console.log(res.length);
      },
      error:(err)=>{
        // alert("Error while fetching the data")
        this.toast.error({detail:"Error While fetching the data!", summary:"something went wrong",duration:5000});
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
