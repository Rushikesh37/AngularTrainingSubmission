import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth.guard';
import { AboutUsComponent } from './components/contact-Us/contact-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { RequestBookComponent } from './components/admin/requestedBook/requests.component';

import { BookListComponent } from './shared/bookList/book-list.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { IssuedBookComponent } from './components/admin/issuedBook/issued-book.component';
import { AdbookdialogComponent } from './components/admin/addBook/add.component';
import { UserComponent } from './components/user/user.component';
import { MybooksComponent } from './components/user/mybooks/mybooks.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { UserListComponent } from './shared/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'contact', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bookcard', component: BookCardComponent },
  {path: 'user',component: UserComponent,
    children: [
      { path: 'booklist', component: BookCardComponent },
      { path: 'mybooks', component: MybooksComponent },
    ],
  },
  {path: 'admin', component: AdminComponent,canActivate: [AuthguardGuard],
    children: [
      { path: 'booklist', component: BookListComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'add', component: AdbookdialogComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'issuedbooks', component: IssuedBookComponent },
      { path: 'requestbooks', component: RequestBookComponent },
      { path: 'issuedlist', component: IssuedBookComponent },
    ],
  },
  { path: 'add',component: AdbookdialogComponent,},
  { path: 'bookcard', component: BookCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
