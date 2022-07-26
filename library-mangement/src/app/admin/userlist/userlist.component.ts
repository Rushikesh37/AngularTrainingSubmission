import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';


export interface User {
  name: string;
  id: number;
  mobileNo: number;
  emailid:string;
  address: string;
}

// const ELEMENT_DATA: PeriodicElement[] 

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers:[UserService]
})
export class UserlistComponent implements OnInit  {

  userdata:any;
  displayedColumns: string[] = ['id', 'name','emailid', 'mobileNo', 'address'];

 
  

  constructor(private userservice:UserService) { }

  

  

  ngOnInit(): void {

    this.userservice.getdata().subscribe(response=>{
    this.userdata=response;
      console.log(response);

        
  

    })

  

   

     
  }

 

}
