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
  term:string="";
  users:any
  today= new Date();
  tomorrow = new Date(this.today.getTime() + (168 * 60 * 60 * 1000));

  // column=["id","image","BookName" ,"author" ,"imageUrl"]
  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','discription','quantity','image'];

  constructor(private bookapi:BookapiService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }


  getAllBooks(){
    this.bookapi.getBook().subscribe({
    next:(res)=>{
      console.log(res)
      this.users=res
  
  },
  error:(err)=>{
    // alert("Error while fetching the data")
    this.toast.error({detail:"Error While fetching the data!", summary:"something went wrong",duration:5000});
  }
})
}
}
