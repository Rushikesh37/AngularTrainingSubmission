import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookapiService } from 'src/app/services/bookapi.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  actionbtn: string = 'Add';
  editData: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private bookapi: BookapiService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      CategoryName: ['', Validators.required],
    });
  }

  addCategory() {
    {
      if (this.categoryForm.valid) {
        this.bookapi.postCategory(this.categoryForm.value).subscribe({
          next: (res) => {
            this.toast.success({
              detail: 'Category added successfully',
              summary: ' new category added',
              duration: 5000,
            });
            this.categoryForm.reset();
          },
          error: (err) => {
            this.toast.error({
              detail: 'error while adding data',
              summary: 'something went wrong',
              duration: 5000,
            });
          },
        });
      } else {
        this.toast.error({
          detail: 'Please Enter Category name!',
          summary: 'type something...',
          duration: 5000,
        });
      }
    }
  }
}
