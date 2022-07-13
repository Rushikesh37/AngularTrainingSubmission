import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  myBookForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "My Books";


  
  displayedColumns: string[] = [ 'bookName', 'category', 'authorName'];

  constructor(private getMybook:UserServiceService) { }

  ngOnInit(): void {


    this.myBookList();
  }


  myBookList(){

    console.log(this.getMybook.getIssuedBook);

    this.getMybook.getIssuedBook()
    .subscribe({
      next: (res) => {

        this.dataSource = new MatTableDataSource(res);
       
        console.log(res)
        // this.no = res.length;
      },
        error: (err) => {
          alert("Error while fetching the data")
          // this.toast.success({detail:"Error while fetching the dat",duration:5000});
        }

      })
  }

    

  }

