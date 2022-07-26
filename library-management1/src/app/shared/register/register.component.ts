import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { RegisterService } from 'src/app/services/register.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  hide = true;

  constructor(private matDialog: MatDialog, private dailogRef: MatDialogRef<RegisterComponent>, private formBuilder: FormBuilder, private regApi: RegisterService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      mobileNo:['',Validators.required],
      password: ['', Validators.required]
     
    });


  }
  register() {
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.regApi.postRegister(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.dailogRef.close('save');
          this.toast.success({ detail: "Registration Done", summary: "Thank You", duration: 5000 });
        },
        error: () => {
          alert('error');
        }
      });
    }
  }
}
