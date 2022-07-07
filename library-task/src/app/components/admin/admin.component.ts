import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { BookapiService } from 'src/app/components/services/bookapi.service';
import { AdbookdialogComponent } from './adbookdialog/adbookdialog.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','discription','quantity','action'];
  dataSource!: MatTableDataSource<any>;
  actionbtn:string="List Of Books";
  no:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,private bookapi:BookapiService,private router:Router) { }


  openDialog() {
    this.dialog.open(AdbookdialogComponent, {
      width:'30%'
  
    }).afterClosed().subscribe(val=>{
    
        this.getAllBooks();
      
    });
  }

  ngOnInit(): void {
    

    
    this.getAllRequests();
    this.getAllBooks();
    

  }

// buttons getall books and request list..........................
  getAllBooks(){

    this.bookapi.getBook().subscribe({
   

      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
        console.log(res.length);
   
      },
      error:(err)=>{
        alert("Error while fetching the data")
      }
    })

  }

  getRequestLists(){

    this.router.navigateByUrl('requestbooks')



  }

  editBook(row:any){
    this.dialog.open(AdbookdialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllBooks();
      }
    })
  }

  deleteBook(id:number){
    this.bookapi.deleteBook(id).subscribe({
      next:(res)=>{
        alert("Book deleted Successfully")
        this.getAllBooks();
      },
      error:()=>{
        alert("Error While deleting the record!")
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

  getAllRequests(){

    

    this.bookapi.getRequest()
    .subscribe({
      next:(res)=>{

        // this.dataSource=new MatTableDataSource(res);
        // this.dataSource.paginator=this.paginator;
        // this.dataSource.sort=this.sort
        // console.log(res)
        this.no = res.length;
      },
      error:(err)=>{
        alert("Error while fetching the data")
      }

    })
  }


}
