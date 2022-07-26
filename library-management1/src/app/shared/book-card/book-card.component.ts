import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BookapiService } from 'src/app/services/bookapi.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  allBookList: any;

  constructor(private bookapi:BookapiService,private toast:NgToastService) { }

  ngOnInit(): void {
  }


  getAllBooks(){

    this.bookapi.getBook().subscribe({
 

    next:(res)=>{
     this.allBookList=res
     
      console.log(res);
    },
    error:(err)=>{
      // alert("Error while fetching the data")
      this.toast.error({detail:"Error While fetching the data!", summary:"something went wrong",duration:5000});

    }
  })
}
}
