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
  tomorrow = new Date(this.today.getTime() + (168 * 60 * 60 * 1000));

  // column=["id","image","BookName" ,"author" ,"imageUrl"]
  displayedColumns: string[] = ['bookName','authorName','bookQuantity','categoryName','image','action'];

  constructor(private formbuilder: FormBuilder,private bookapi:BookapiService,private toast:NgToastService,private userapi:UserServiceService) { }

  ngOnInit(): void {

    this.Form = this.formbuilder.group({
      // id:['',Validators.required],
      
      bookId: ['', Validators.required],
      userId:['', Validators.required],
      requestDate: [this.today]
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
    // alert("Error while fetching the data")
    this.toast.error({detail:"Error While fetching the data!", summary:"something went wrong",duration:5000});
  }
})
}
sendRequest(data:any){

   
  this.Form.controls['bookId'].setValue(data.bookId);
  this.Form.controls['userId'].setValue(data.localStorage.getItem.arguments.id);
  this.Form.controls['requestDate'].setValue(data.requestDate);
    this.userapi.requestBook(this.Form.value)
    .subscribe({
      
      next: (res) => {
        // this.action = 'check_box';
        // this.color = 'warn'
        alert('Thank you...');
        console.log(res,'hello');
    
      }
  
    })

  }

}
