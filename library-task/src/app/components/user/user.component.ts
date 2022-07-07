import { Component, OnChanges, OnInit,SimpleChanges,ViewChild } from '@angular/core';
import { BookapiService } from 'src/app/components/services/bookapi.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserServiceService } from 'src/app/components/services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  requestForm !: FormGroup;

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','discription','quantity','action'];
  dataSource!: MatTableDataSource<any>;
  no:any;
  count:number=0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 

  constructor(private formbuilder:FormBuilder,private bookapi:BookapiService,private requestapi:UserServiceService) { }

  ngOnInit(): void {

    this.requestForm=this.formbuilder.group({

      id:['',Validators.required],
      bookName:['',Validators.required],
      category:['',Validators.required],
      authorName:['',Validators.required],
      discription:['',Validators.required],
      quantity:['',Validators.required]
    })

    this.getAllBooks();
   
  }


  getAllBooks(){
    this.bookapi.getBook().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the data")
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


  // all about  user request operation .......................................
  sendRequest(no:any){
    if(no>3){
     alert("You cross the limit");
    }
    else{
     if(this.requestForm.valid){
       this.requestapi.requestBook(this.requestForm.value)
       .subscribe({
         next:(res)=>{
           alert("send request successfully")
           
         }
       })
     }
    }
   }

  requestBook(data:any){
    
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


   
    getAllRequests(){
      this.bookapi.getRequest()
      .subscribe({
        next:(res)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort
          this.no = res.length;
        },
        error:(err)=>{
          alert("Error while fetching the data")
        }
      })
  }

}


