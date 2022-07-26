import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dialog: any;


ngOnInit(): void {
  throw new Error('Method not implemented.');
}

 
  constructor(private matDialog:MatDialog) {
   
   }

  
  login(){
      this.matDialog.closeAll();
     
    // this.dialog.open(BookCardsComponent)
    
  }

 

}

// signin: FormGroup = new FormGroup({
//   email: new FormControl('', [Validators.email, Validators.required ]),
//   password: new FormControl('', [Validators.required, Validators.min(3) ])
// });
// hide = true;
// get emailInput() { return this.signin.get('email'); }
// get passwordInput() { return this.signin.get('password'); }  
// }





