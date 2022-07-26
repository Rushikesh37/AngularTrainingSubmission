import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



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
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName', 'discription', 'quantity', 'action'];
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "List Of Books";
  reqNo: any
  issuedNo:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private bookapi: BookapiService, private router: Router, private toast: NgToastService) { }


  openDialog() {
    this.dialog.open(AdbookdialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      this.getAllBooks();
    });
  }

  ngOnInit(): void {
    this.getAllRequests();
    this.getAllBooks();
    this.getIssuedBooks();
  }
  // buttons getall books and request list..........................
  getAllBooks() {
    this.bookapi.getBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        console.log(res.length);
      },
      error: (err) => {
        // alert("Error while fetching the data")
        this.toast.error({ detail: "Error While fetching the data!", summary: "something went wrong", duration: 5000 });

      }
    })
  }

  getIssuedBook() {
    this.router.navigateByUrl('issuedbooks')
  }

  

  getRequestLists() {
    this.router.navigateByUrl('requestbooks')
  }
  editBook(row: any) {
    this.dialog.open(AdbookdialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllBooks();
        
      }
    })
    
    
  }

  deleteBook(id: number) {
    this.bookapi.deleteBook(id).subscribe({
      next: (res) => {
        // alert("Book deleted Successfully")
        this.toast.success({ detail: "Book deleted Successfully", summary: "one book deleted", duration: 5000 });
        this.getAllBooks();
      },
      error: () => {
        // alert("Error While deleting the book!")
        this.toast.error({ detail: "Error While deleting the book!", summary: "something went wrong", duration: 5000 });
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
  // fetching request from book.json
  getAllRequests() {
    this.bookapi.getRequest()
      .subscribe({
        next: (res) => {
       
          this.reqNo = res.length;
        },
        error: (err) => {
          // alert("Error while fetching the data");
          this.toast.error({ detail: "Error While fetching the data!", summary: "something went wrong", duration: 5000 });
        }
      })
  }

  getIssuedBooks() {
    this.bookapi.getIssuedBooks()
      .subscribe({
        next: (res) => {
          this.issuedNo = res.length;

          console.log(this.issuedNo)
        },
        error: (err) => {
          // alert("Error while fetching the data");
          this.toast.error({ detail: "Error While fetching the data!", summary: "something went wrong", duration: 5000 });
        }
      })
  }
}
