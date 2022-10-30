import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookapiService } from 'src/app/services/bookapi.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AdminComponent } from '../admin.component';
import { NgToastService } from 'ng-angular-popup';
import { BookCategory } from 'src/app/model/book-category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adbookdialog',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AdbookdialogComponent implements OnInit {
  bookForm!: FormGroup;
  actionbtn: string = 'save';
  editData: any;
  bookCategory: BookCategory[];
  constructor(
    private route:Router,
    private formBuilder: FormBuilder,
    private bookapi: BookapiService,
    @Inject(MAT_DIALOG_DATA) public editBook: any,
    private dialogref: MatDialogRef<AdbookdialogComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookId:['',Validators.required],
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      bookQuantity: ['', Validators.required],
      categoryId: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.getCategory();

    if (this.editBook) {
      this.actionbtn = 'update';
      this.bookForm.controls['bookId'].setValue(this.editBook.bookId);
      this.bookForm.controls['bookName'].setValue(this.editBook.bookName);
      this.bookForm.controls['authorName'].setValue(this.editBook.authorName);
      this.bookForm.controls['bookQuantity'].setValue( this.editBook.bookQuantity );
      this.bookForm.controls['categoryId'].setValue(this.editBook.categoryId);
      this.bookForm.controls['image'].setValue(this.editBook.image);

     
    }
  }
  addBook() {
    if (!this.editBook) {
      if (this.bookForm.valid) {
        this.bookapi.postBook(this.bookForm.value).subscribe({
          next: (res) => {
            this.toast.success({
              detail: 'Book added successfully',
              summary: 'one book added',
              duration: 5000,
            });
            this.dialogref.close('save');
            this.route.navigateByUrl('admin/booklist')
            
        
          },
          error: () => {
            this.toast.error({
              detail: 'Error while adding book',
              summary: 'something is error while adding',
              duration: 5000,
            });
          },
        });
      }
    } else {
      this.updateBookData();
    }
  }

  getCategory() {
    this.bookapi.getCategory().subscribe((res: BookCategory[]) => {
      this.bookCategory = res;
    });
  }
  updateBookData() {
    console.log(this.bookForm.value);
    this.bookapi.putBookData(this.editBook.bookId,this.bookForm.value ).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Book Updated Successfully!',
          summary: 'one book updated',
          duration: 5000,
        });
        this.bookForm.reset();
        this.dialogref.close('update');
      },
      error: () => {
        this.toast.error({
          detail: 'Error while updating book',
          summary: 'something is error while updating',
          duration: 5000,
        });
      },
    });
    this.bookapi.getBook();
  }
}
