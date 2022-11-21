import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {ServService} from '../app/serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'autocomplete';

  options = ["Ram", "Abhijeet", "Abhinav"];

  filteredOptions;

  formGroup : FormGroup;
  constructor(private service : ServService, private fb : FormBuilder){}

  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = this.fb.group({
      'employee' : ['']
    })
    this.formGroup.get('employee').valueChanges.pipe(debounceTime(500)).subscribe(response => {
      if(response && response.length>=3){
        console.log('data is',response);
        
      this.filterData(response);
      }else{
        this.filteredOptions=[];
      }
    })
  }

  filterData(enteredData){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.service.getData().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  }

}
