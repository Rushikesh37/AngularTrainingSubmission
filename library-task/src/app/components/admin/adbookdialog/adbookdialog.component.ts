import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { BookapiService } from 'src/app/components/services/bookapi.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-adbookdialog',
  templateUrl: './adbookdialog.component.html',
  styleUrls: ['./adbookdialog.component.css']
})
export class AdbookdialogComponent implements OnInit {
   bookForm !: FormGroup;
   actionbtn:string="Save"
  constructor(private formbuilder:FormBuilder,private bookapi:BookapiService,
    @Inject(MAT_DIALOG_DATA) public editBook:any) { }

  ngOnInit(): void {

    this.bookForm=this.formbuilder.group({

      id:['',Validators.required],
      bookName:['',Validators.required],
      category:['',Validators.required],
      authorName:['',Validators.required],
      discription:['',Validators.required],
      quantity:['',Validators.required]

    })

    if(this.editBook){

      this.actionbtn="Update";
      this.bookForm.controls['id'].setValue(this.editBook.id);
      this.bookForm.controls['bookName'].setValue(this.editBook.bookName);
      this.bookForm.controls['category'].setValue(this.editBook.category);
      this.bookForm.controls['authorName'].setValue(this.editBook.authorName);
      this.bookForm.controls['discription'].setValue(this.editBook.discription);
      this.bookForm.controls['quantity'].setValue(this.editBook.quantity);
      
    }



    console.log(this.editBook);                 //data is coming to console after poping form
  }

  addBook(){
    if(!this.editBook){
      if(this.bookForm.valid){
        this.bookapi.postBook(this.bookForm.value)
        .subscribe({
          next:(res)=>{
            alert("Book added successfully")

          
          },
          error:()=>{
            alert("Error while adding book")
          }
        })
      }else{
        this.updateBookdData()
      }
    }


   
    
    console.log(this.bookForm.value);
  }


  updateBookdData(){

    this.bookapi.putBookData(this.bookForm.value,this.editBook.id).
    subscribe({
      next:(res)=>{
        alert("Book Updated Successfully!")
        this.bookForm.reset
        
      },
      error:()=>{
        alert("Error In Updating the book")
      }

      
    })

  }

}
