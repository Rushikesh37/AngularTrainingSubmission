import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef } from 'ag-grid-community';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {
  
  counDowndate:any
  myBookForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "My Books";
  newdate:any;
  crDate = new Date();
  displayedColumns: string[] = [ 'issuedId','bookName', 'issueDate', 'returnDate','action'];

  constructor(private formbuilder: FormBuilder,private getMybook:UserServiceService) { }

  ngOnInit(): void {
    
    this.myBookForm = this.formbuilder.group({
      // id:['',Validators.required],

      issuedId: ['', Validators.required],
      bookName: ['', Validators.required],   
      issueDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      action: ['', Validators.required],
    })
    this.myBookList();
    
  }

  rowData: any;
  data:any;
  defaultColDef:ColDef={sortable:true, filter:true}

  //Dynamic implementation
  colDefs = [
    {headerName: 'Issued Id', field: 'issuedId', sortable: true, filter: true},
    {headerName: 'Book Name', field: 'bookName', sortable: true, filter: true},
    {headerName: 'Issued Date', field: 'issueDate', sortable: true, filter: true},
    {headerName: 'Return Date', field: 'returnDate', sortable: true, filter: true},
    {headerName: 'Return Book', field: 'action', sortable: true, filter: true},
  
];
  counter:any;

  myBookList(){
   
    this.getMybook.getIssuedBook()
    .subscribe({
      next: (res) => {
       this.data=res;
       this.dataSource = new MatTableDataSource(res);
       console.log(res)
      },
        error: (err) => {
          alert("Error while fetching the data")
             // this.toast.success({detail:"Error while fetching the dat",duration:5000});
        }
      });
  }
  public seprateDate(data:any){
    data = data.split("T");
    let rtdate = data[0].split("-");
    let rtyear = rtdate[0];
    let rtmonth = rtdate[1]
    let rtdd = rtdate[2]
    let rtTime = data[1].split(":");
    let rthh = rtTime[0];
    let rtminute = rtTime[1];
    let rtsecond = rtTime[2].split(".");
  return (rtyear+':'+rtmonth+':'+rtdd+':'+rthh+':'+rtminute+':'+rtsecond[0]);
  }
  public seprateCrDate(){
    let data = new Date();
      let day = data.getDate();
      let month = data.getMonth()+1;
    let year = data.getFullYear();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    return (year+':'+month+':'+day+':'+hour+':'+minute+':'+second)
  }
  
  }



