import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import BookData from '../book.json';


interface Book {
  value: string;
  viewValue: string;
}

interface BookList{

  id:number,
 
  image:string,
  name:string,
  Quantity:number,
  author:string,
  description:string


}
@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {



  longText = `This adored classic is about four sisters — Jo, Beth, Meg, and Amy — who are struggling to survive in New England during the Civil War. 
  .`;

  book: Book[] = [
    {value: 'author', viewValue: 'Author'},
    {value: 'publication', viewValue: 'Publication'},
    // {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  // booklists:BookList[]=BookData;




  constructor() { }

  ngOnInit(): void {
  }

}
