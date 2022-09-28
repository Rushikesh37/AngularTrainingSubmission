import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BookapiService } from 'src/app/services/bookapi.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { MyBooksComponent } from './myBooks/myBooks.component';
import Swal from 'sweetalert2';

import {MatSidenavModule} from '@angular/material/sidenav';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  defaultColDef:ColDef={sortable:true, filter:true}

  colDefs = [
    {headerName: 'Id', field: 'id', sortable: true, filter: true},
    {headerName: 'Book Name', field: 'bookName', sortable: true, filter: true},
    {headerName: 'Category', field: 'category', sortable: true, filter: true},
    {headerName: 'Author Name', field: 'authorName', sortable: true, filter: true},
    {headerName: 'Discription', field: 'discription', sortable: true, filter: true},
    {headerName: 'Quantity', field: 'quantity', sortable: true, filter: true},
    {headerName: 'Action', field: 'action', sortable: true, filter: true}
];

rowData: any;
data:any
users:any
term:string="";

  requestForm !: FormGroup;
  no: any
  // displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','discription','quantity','image'];
  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName', 'discription', 'quantity', 'action'];
  dataSource!: MatTableDataSource<any>;

  count: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
authenticate: any;


  constructor(public dialog: MatDialog, private formbuilder: FormBuilder, private toast: NgToastService, private bookapi: BookapiService, private requestapi: UserServiceService, private getMyBooK: UserServiceService) { }

  ngOnInit(): void {
    this.requestForm = this.formbuilder.group({
      id: ['', Validators.required],
      bookName: ['', Validators.required],
      category: ['', Validators.required],
      authorName: ['', Validators.required],
      discription: ['', Validators.required],
      quantity: ['', Validators.required]
    })
    this.getAllBooks();
    this.issuedBook();
  }
 getAllBooks() {
    this.bookapi.getBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.data=res;
        
      },
      error: (err) => {
        // alert("Error while fetching the data")
        this.toast.error({ detail: "Error while fetching the data", summary: "something went wrong", duration: 5000 });
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

  myBooks() {
    this.dialog.open(MyBooksComponent, {
      width: "50%"
    });
  }
// all about  user request operation .......................................
 sendRequest(no: any) {
    if (no > 2) {
      //  alert("You cross the limit");
      this.toast.error({ detail: "Limit Exceds", summary: "Max 3 Book available!!!", duration: 5000 });
    }
    else {
      Swal.fire({
        title: 'Are you want to Request Book?',
        text: 'Select Your Choice',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Request',
        cancelButtonText: 'Cancel'
        
      }).then((result) => {
        if (result.value) {
          if (this.requestForm.valid) {
            // console.log(this.requestForm.value)
            this.requestapi.requestBook(this.requestForm.value)
              .subscribe({
                next: (res) => {
                  Swal.fire('Thank you...', 'Book Request Send  succesfully!!!', 'success')
                }
              })
          }
        } else {
          Swal.fire('Thank You...', 'Request Cancel succesfully!!!', 'error')
        }
      }
      )
    }
  }
  //***********************using toaster service************************************** */
  //  if(this.requestForm.valid){
  //   console.log(this.requestForm.value)
  //    this.requestapi.requestBook(this.requestForm.value)
  //    .subscribe({
  //      next:(res)=>{
  //       //  alert("Request send successfully")
  //        this.toast.success({detail:"Request send successfully", summary:"Thank You",duration:5000});

  //      }
  //    })
  //  }

  // **************************************************************************************

  requestBook(data: any) {
    this.requestForm.controls['id'].setValue(data.id);
    this.requestForm.controls['bookName'].setValue(data.bookName);
    this.requestForm.controls['category'].setValue(data.category);
    this.requestForm.controls['authorName'].setValue(data.authorName);
    this.requestForm.controls['discription'].setValue(data.discription);
    this.requestForm.controls['quantity'].setValue(data.quantity);
    this.sendRequest(this.count);
    this.count++;
    console.log(this.count);
  }
    getAllRequests() {
    this.bookapi.getRequest()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          this.no = res.length;
        },
        error: (err) => {
          alert("Error while fetching the data")
        }
      })
  }
  issuedBook() {
    this.getMyBooK.getIssuedBook().subscribe({
      next: (res) => {
        this.no = res.length
      },
      error: (err) => {
        // alert("Error while fetching the data");
        this.toast.error({ detail: "Error While fetching the data!", summary: "something went wrong", duration: 5000 });
      }
    })
  }
}


