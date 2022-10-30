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
  styleUrls: ['./requests.component.css'],
})
export class RequestBookComponent implements OnInit {
  issuedForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = 'Book Request List';
  demo: any;
  action = 'done';
  color = 'success';
  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  hour = this.currentDate.getHours();
  minute = this.currentDate.getMinutes();
  seconds = this.currentDate.getSeconds();
  // returndt = new Date(`${this.month} ${this.day+3},  ${this.year} ${this.hour}:${this.minute}+${this.seconds}`).getDate();
  returndt = this.day + 5 + '/' + this.month + '/' + this.year;
  //returnDate = (this.year+'-'+this.month+'-'+(Number(this.day)+3)+'T'+this.hour+':'+this.minute+':'+this.seconds)
  date =
    this.year +
    '-' +
    this.month +
    '-' +
    this.day +
    'T' +
    this.hour +
    ':' +
    this.minute +
    ':' +
    this.seconds;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'requestId',
    'bookId',
    'bookName',
    'userName',
    'requestDate',
    'action',
  ];
  now: any;
  userId = localStorage.getItem('userId');

  constructor(
    private bookapi: BookapiService,
    private toast: NgToastService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.issuedForm = this.formbuilder.group({
      bookId: ['', Validators.required],
      userId: ['', Validators.required],
      issueDate: [this.date],
      returnDate: [this.returndt],
    });
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

  goBack() {
    this.router.navigateByUrl('admin/booklist');
  }

  getAllRequests() {
    this.bookapi.getRequest().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error: (err) => {
        this.toast.success({
          detail: 'Error while fetching the dat',
          duration: 5000,
        });
      },
    });
  }
  accept(data: any) {
    this.issuedForm.controls['bookId'].setValue(data.bookId);
    this.issuedForm.controls['userId'].setValue(this.userId);
    this.issuedForm.controls['issueDate'].setValue(data.issueDate);
    this.issuedForm.controls['returnDate'].setValue(data.returnDate);
    Swal.fire({
      title: 'Are you want to Issued Book?',
      text: 'Select Your Choice',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Issued',
      cancelButtonText: 'Reject',
    }).then((result) => {
      if (result.value) {
        this.bookapi.issuedBook(this.issuedForm.value).subscribe({
          next: (res) => {
            Swal.fire(
              'Thank you...',
              'Booked Issued succesfully!!!',
              'success'
            );
            this.bookapi.deleteRequestedBook(data.requestId).subscribe({
              next: (res) => {
                this.getAllRequests();
                console.log(this.getAllRequests());
              },
            });
          },
        });
      } else {
        Swal.fire(
          'Thank You...',
          'Booked Request Rejected succesfully!!!',
          'error'
        );
      }
    });
  }
}
