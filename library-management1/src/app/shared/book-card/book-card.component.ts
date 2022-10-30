import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { BookapiService } from 'src/app/services/bookapi.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  allBookList: any;
  Form:any
  term:string="";
  books:any
  today= new Date();
  day = this.today.getDate();
  month = this.today.getMonth()+1;
  year = this.today.getFullYear();

  date = (this.year + '-' + this.month + '-' + (this.day)).toString();
  //date = ( this.month  + '/' +(this.day) + '/' +  this.year).toString();
  tomorrow = new Date(this.today.getTime() + (168 * 60 * 60 * 1000));

  displayedColumns: string[] = ['bookName','authorName','bookQuantity','categoryName','image','action'];

  constructor(private formbuilder: FormBuilder,private bookapi:BookapiService,private toast:NgToastService,private userapi:UserServiceService) { }

  ngOnInit(): void {
    this.Form = this.formbuilder.group({  
      bookId: ['', Validators.required],
      userId:['', Validators.required],
      requestDate: ['']
    })
      this.getAllBooks();      
  }
  getAllBooks(){
    this.bookapi.getBook().subscribe({
    next:(res)=>{
      console.log(res)
      this.books=res 
  },
  error:(err)=>{
    this.toast.error({detail:"Error While fetching the data!", summary:"something went wrong",duration:5000});
  }
})
}
sendRequest(data:any){
  this.Form.controls['bookId'].setValue(data.bookId);
  this.Form.controls['userId'].setValue(localStorage.getItem('userId'));
  this.Form.controls['requestDate'].setValue(this.date);

  console.log(this.Form.value,this.date,this.month);
    this.userapi.requestBook(this.Form.value)
    .subscribe({     
      next: (res) => {
        this.toast.success({ detail: "Request send Successfully", summary: "one book deleted", duration: 5000 });
        console.log(res,'hello');   
      }  
    })
  }
}
