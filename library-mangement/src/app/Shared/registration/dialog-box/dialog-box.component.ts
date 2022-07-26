import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
 
 

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openMenu(){
    
  }

}
