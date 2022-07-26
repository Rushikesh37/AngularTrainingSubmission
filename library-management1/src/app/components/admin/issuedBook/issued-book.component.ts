import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookapiService } from 'src/app/services/bookapi.service';

@Component({
  selector: 'app-issued-book',
  templateUrl: './issued-book.component.html',
  styleUrls: ['./issued-book.component.css']
})


export class IssuedBookComponent implements OnInit {
  issuedForm !: FormGroup;
  actionbtn: string = "Book Issued List";
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['bookName', 'category', 'authorName', 'returnDate'];
  now: any;
  constructor(private formbuilder: FormBuilder, private router: Router, private bookapi: BookapiService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.issuedForm = this.formbuilder.group({
      // id:['',Validators.required],
      bookName: ['', Validators.required],
      category: ['', Validators.required],
      authorName: ['', Validators.required],
      returnDate: ['', Validators.required]

    })

    this.IssuedBooks();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  IssuedBooks() {
    // this.actionbtn = "Request List"
    this.bookapi.getIssuedBooks()
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

  goBack() {
    this.router.navigateByUrl('admin')
  }
}
