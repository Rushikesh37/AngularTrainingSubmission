import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  register(){
    this.matDialog.closeAll();
    alert("registeration success")
  }

}
