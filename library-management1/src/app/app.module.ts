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

import { AdminComponent } from './components/admin/admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
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

import { BookListComponent } from './shared/bookList/book-list.component';

import { AboutUsComponent } from './components/contact-Us/contact-us.component';
import {MatDividerModule} from '@angular/material/divider';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { IssuedBookComponent } from './components/admin/issuedBook/issued-book.component';
import {MatMenuModule} from '@angular/material/menu';
import { AgGridModule } from 'ag-grid-angular';
import {Ng2SearchPipeModule}  from 'ng2-search-filter';
import { SideNavbarComponent } from './shared/sideNavbar/side-navbar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { UserComponent } from './components/user/user.component';
import { UserNavbarComponent } from './components/user/user-navbar/user-navbar.component';
import { MybooksComponent } from './components/user/mybooks/mybooks.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { UserListComponent } from './shared/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdbookdialogComponent,
    RequestBookComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    BookListComponent,
    AdminNavbarComponent,
    AboutUsComponent,
    BookCardComponent,
    IssuedBookComponent,
    SideNavbarComponent,
    UserComponent,
    UserNavbarComponent,
    MybooksComponent,
    AddCategoryComponent,
    UserListComponent,


  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
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
    AgGridModule,
    PerfectScrollbarModule,
    MatSidenavModule,
    MatListModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
