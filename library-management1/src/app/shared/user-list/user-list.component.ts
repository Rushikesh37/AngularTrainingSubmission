import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { NgToastService } from 'ng-angular-popup';
import { BookapiService } from 'src/app/services/bookapi.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private bookapi:BookapiService,private router:Router,private toast :NgToastService) { }

  ngOnInit(): void {

    this.getAllUserInfo()
  }
  defaultColDef:ColDef={sortable:true, filter:true}
  data:any

  colDefs = [
    {headerName: 'User Id', field: 'userId', sortable: true, filter: true},
    {headerName: ' First Name', field: 'firstName', sortable: true, filter: true},
    {headerName: ' Email', field: 'email', sortable: true, filter: true},
    {headerName: 'Gender', field: 'gender', sortable: true, filter: true},
    {headerName: 'City', field: 'city', sortable: true, filter: true},
    {headerName: 'Contact', field: 'contact', sortable: true, filter: true},
    {headerName: 'Action', field: 'action', sortable: true, filter: true}
];


rowData: any;

getAllUserInfo(){
  this.bookapi.getUserList().subscribe({
  next:(res)=>{


  console.log(res.length);
  this.data=res;
},
error:(err)=>{
  // alert("Error while fetching the data")
  this.toast.error({detail:"Error While fetching the data!", summary:"something went wrong",duration:5000});
}
})
}

}
