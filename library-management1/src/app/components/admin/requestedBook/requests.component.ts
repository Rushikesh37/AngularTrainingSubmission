import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookapiService } from 'src/app/services/bookapi.service';

import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { pipe } from 'rxjs';



@Component({
  selector: 'app-request-book',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestBookComponent implements OnInit {
  issuedForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "Book Request List";
  demo: any
  action = 'done'
  color = 'success'
  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  hour = this.currentDate.getHours();
  minute = this.currentDate.getMinutes();
  seconds = this.currentDate.getSeconds();
  // returndt = new Date(`${this.month} ${this.day+3},  ${this.year} ${this.hour}:${this.minute}+${this.seconds}`).getDate();
  returndt = this.day + 5 + "/" + this.month + "/" + this.year
  //returnDate = (this.year+'-'+this.month+'-'+(Number(this.day)+3)+'T'+this.hour+':'+this.minute+':'+this.seconds)
  date = (this.year + '-' + this.month + '-' + (this.day) + 'T' + this.hour + ':' + this.minute + ':' + this.seconds)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['bookName', 'category', 'authorName', 'action'];
  now: any;
  // dataSources!: MatTableDataSource<any>;
  //date seprate
  constructor(private bookapi: BookapiService, private toast: NgToastService, private router: Router, private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.issuedForm = this.formbuilder.group({
      // id:['',Validators.required],
      bookName: ['', Validators.required],
      category: ['', Validators.required],
      authorName: ['', Validators.required],
      date: [this.date],
      returnDate: [this.returndt]
    })
    this.getAllRequests();
    console.log(this.returndt);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //------------------------------- back button--------------------------------
  goBack() {
    this.router.navigateByUrl('admin')
  }
  //  -------------------------------------------------
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
          this.toast.success({ detail: "Error while fetching the dat", duration: 5000 });
        }
      })
  }
  accept(data: any) {
    // console.log(this.issuedForm.value);
    // this.issuedForm.controls['id'].setValue(data.id);
    this.issuedForm.controls['bookName'].setValue(data.bookName);
    this.issuedForm.controls['category'].setValue(data.category);
    this.issuedForm.controls['authorName'].setValue(data.authorName);
    // this.issuedForm.controls['discription'].setValue(data.discription);
    // this.issuedForm.controls['quantity'].setValue(data.quantity);
    Swal.fire({
      title: 'Are you want to Issued Book?',
      text: 'Select Your Choice',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Issued',
      cancelButtonText: 'Reject'
    }).then((result) => {
      if (result.value) {
        this.bookapi.issuedBook(this.issuedForm.value)
          .subscribe({
            next: (res) => {
              // this.action = 'check_box';
              // this.color = 'warn'
              Swal.fire('Thank you...', 'Booked Issued succesfully!!!', 'success');
              console.log(data.id)

              this.bookapi.deleteRequestedBook(data.id).subscribe({
                next: (res) => {
                  this.getAllRequests();
                }
              })
            }
          })
      } else {
        Swal.fire('Thank You...', 'Booked Request Rejected succesfully!!!', 'error')
      }
    })
    //  console.log(data);
  }
}
// **********************************Date *****************************//


// *********************************** using toaster service ***********************************
    // this.bookapi.issuedBook(this.issuedForm.value)
    // .subscribe({next:(res)=>{
    //   this.action='check_box';
    //   this.color='warn'

    // alert("Book Accepted")   ...........this is simple alert..............


    // this.toast.success({detail:"Request Book Accepted!",duration:5000}); ............alert using toast service.......................

    // }

    // })
// **************************************************************************************************



