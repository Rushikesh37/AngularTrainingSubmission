import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdbookdialogComponent } from './components/admin/addBook/add.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSortModule} from '@angular/material/sort'

import {MatBadgeModule} from '@angular/material/badge';
import { RequestBookComponent } from './components/admin/requestedBook/requests.component';
import { NavbarComponent } from './shared/homeNavbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './shared/home/home.component';
import { RegisterComponent } from './shared/register/register.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgToastModule } from "ng-angular-popup";
import { MyBooksComponent } from './components/user/myBooks/myBooks.component';
import { BookListComponent } from './shared/bookList/book-list.component';
import { UserNavbarComponent } from './components/user/userNavbar/user-navbar.component';
import { AdminNavbarComponent } from './components/admin/adminNavbar/admin-navbar.component';
import { AboutUsComponent } from './components/contactUs/contact-us.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { IssuedBookComponent } from './components/admin/issuedBook/issued-book.component';


schemas: [CUSTOM_ELEMENTS_SCHEMA]










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    AdbookdialogComponent,
    RequestBookComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    MyBooksComponent,
    BookListComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    AboutUsComponent,
    BookCardComponent,
    IssuedBookComponent,
  
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatCheckboxModule,
    NgToastModule,
    MatCardModule,
    
    
  
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
