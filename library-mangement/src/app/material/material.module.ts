import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';


const matDec =[BrowserModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  FormsModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
  MatMenuModule,
  MatGridListModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  ReactiveFormsModule,
  MatNativeDateModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matDec
  ]
  ,exports:[
    matDec
  ]
})
export class MaterialModule { }
