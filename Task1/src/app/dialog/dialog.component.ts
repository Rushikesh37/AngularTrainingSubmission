import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product.service';

// const today = new Date();
// const month = today.getMonth();
// const year = today.getFullYear();
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
 //minDate=new Date();
 collectData!: FormGroup;
 EXAMPLE_DATA:any=[];
  constructor(private formbuilder:FormBuilder,private productservice:ProductService, private MatDialog:MatDialog) { }
  ngOnInit(): void {
    this.collectData=this.formbuilder.group({
      id:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      dateCreated:['',[Validators.required]],
      permanentLink:['',[Validators.required]]
  
    })
  }
  sendMessage(){
    this.EXAMPLE_DATA.push(this.collectData.value);
    this.productservice.saveData(this.EXAMPLE_DATA);
    this.MatDialog.closeAll();
  }
}
