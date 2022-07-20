import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookapiService } from 'src/app/components/services/bookapi.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminComponent } from '../admin.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-adbookdialog',
  templateUrl: './adbookdialog.component.html',
  styleUrls: ['./adbookdialog.component.css']
})
export class AdbookdialogComponent implements OnInit {
  bookForm !: FormGroup;
  actionbtn: string = "save";
  editData: any;
  constructor(private formBuilder: FormBuilder, private bookapi: BookapiService,
    @Inject(MAT_DIALOG_DATA) public editBook: any, private dialogref: MatDialogRef<AdbookdialogComponent>,private toast :NgToastService) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      // id:['',Validators.required],
      bookName: ['', Validators.required],
      category: ['', Validators.required],
      authorName: ['', Validators.required],
      discription: ['', Validators.required],
      quantity: ['', Validators.required]
    })



    if (this.editBook) {
      this.actionbtn = "update";
      // this.bookForm.controls['id'].setValue(this.editBook.id);

      this.bookForm.controls['bookName'].setValue(this.editBook.bookName);
      this.bookForm.controls['category'].setValue(this.editBook.category);
      this.bookForm.controls['authorName'].setValue(this.editBook.authorName);
      this.bookForm.controls['discription'].setValue(this.editBook.discription);
      this.bookForm.controls['quantity'].setValue(this.editBook.quantity);
    }           //data is coming to console after poping form
  }

  addBook() {
    if (!this.editBook) {
      if (this.bookForm.valid) {
        this.bookapi.postBook(this.bookForm.value)
          .subscribe({
            next: (res) => {
              // alert("Book added successfully");
              this.toast.success({detail:"Book added successfully", summary:"one book added",duration:5000});
              this.dialogref.close('save');
              window.location.reload();
            },
            error: () => {
              // alert("Error while adding book")
              this.toast.error({detail:"Error while adding book", summary:"something is error while adding",duration:5000});
              
            },
          });
      }
    }else{
      this.updateBookData();
    }
  }


  updateBookData() {
    this.bookapi.putBookData(this.bookForm.value, this.editBook.id).
      subscribe({
        next: (res) => {
          // alert("Book Updated Successfully!")
          this.toast.success({detail:"Book Updated Successfully!", summary:"one book updated",duration:5000});
          this.bookForm.reset();
          this.dialogref.close('update');
        },
        error: () => {
          // alert("Error In Updating the book")
          this.toast.error({detail:"Error while updating book", summary:"something is error while updating",duration:5000});
        }
      })
  }
}
