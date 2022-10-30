import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { NgToastService } from 'ng-angular-popup';
import { BookapiService } from 'src/app/services/bookapi.service';

@Component({
  selector: 'app-issued-book',
  templateUrl: './issued-book.component.html',
  styleUrls: ['./issued-book.component.css'],
})
export class IssuedBookComponent implements OnInit {
  issuedForm!: FormGroup;
  actionbtn: string = 'Book Issued List';
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'issuedId',
    'bookName',
    'userName',
    'issueDate',
    'returnDate',
  ];
  now: any;
  data: any;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private bookapi: BookapiService,
    private toast: NgToastService
  ) {}

  rowData: any;
  defaultColDef: ColDef = { sortable: true, filter: true };

  colDefs = [
    {
      headerName: 'Issued Id',
      field: 'issuedId',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Book Name',
      field: 'bookName',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'User Name',
      field: 'userName',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Issued Date',
      field: 'issueDate',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Return Date',
      field: 'returnDate',
      sortable: true,
      filter: true,
    },
  ];

  ngOnInit(): void {
    this.issuedForm = this.formbuilder.group({
      issuedId: ['', Validators.required],
      bookName: ['', Validators.required],
      userName: ['', Validators.required],
      issueDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });

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
    this.bookapi.getIssuedBooks().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        console.log(res);
        this.data = res;
        // this.no = res.length;
      },
      error: (err) => {
        this.toast.success({
          detail: 'Error while fetching the dat',
          duration: 5000,
        });
      },
    });
  }

  goBack() {
    this.router.navigateByUrl('admin/booklist');
  }
}
