import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookapiService } from 'src/app/components/services/bookapi.service';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "Book Request List";

  action='done'
  color='success'



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [ 'bookName', 'category', 'authorName','action'];

  constructor(private bookapi: BookapiService,private toast :NgToastService) { }

  ngOnInit(): void {

    this.getAllRequests();

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }



  getAllRequests() {

    // this.actionbtn = "Request List"

    this.bookapi.getRequest()
      .subscribe({
        next: (res) => {

          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          console.log(res)
          // this.no = res.length;
        },
        error: (err) => {
          // alert("Error while fetching the data")
          this.toast.success({detail:"Error while fetching the dat",duration:5000});
        }

      })
  }

  accept(){
    this.action='check_box';
    this.color='warn'
    // alert("Book Accepted")
    this.toast.success({detail:"Request Book Accepted!",duration:5000});
  }



}
