import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookapiService } from 'src/app/components/services/bookapi.service';

import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {
  issuedForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "Book Request List";

  action='done'
  color='success'



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [ 'bookName', 'category', 'authorName','action'];
  // dataSources!: MatTableDataSource<any>;

  constructor(private bookapi: BookapiService,private toast :NgToastService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {


    this.issuedForm=this.formbuilder.group({

      // id:['',Validators.required],
      bookName:['',Validators.required],
      category:['',Validators.required],
      authorName:['',Validators.required],
      // discription:['',Validators.required],
      // quantity:['',Validators.required]
    })

    this.getAllRequests();

    

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
 
   
  //------------------------------- back button--------------------------------
   goBack(){
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
          this.toast.success({detail:"Error while fetching the dat",duration:5000});
        }

      })
  }

  accept(data:any){
  console.log(this.issuedForm.value);
    this.bookapi.issuedBook(this.issuedForm.value)

    // this.issuedForm.controls['id'].setValue(data.id);
    // this.issuedForm.controls['bookName'].setValue(data.bookName);
    // this.issuedForm.controls['category'].setValue(data.category);
    // this.issuedForm.controls['authorName'].setValue(data.authorName);
    // this.issuedForm.controls['discription'].setValue(data.discription);
    // this.issuedForm.controls['quantity'].setValue(data.quantity);
   

     console.log(data);

    
    this.action='check_box';
    this.color='warn'
    // alert("Book Accepted")  
    this.toast.success({detail:"Request Book Accepted!",duration:5000});
  }



}
