import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth.guard';
import { AboutUsComponent } from './components/contact-Us/contact-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { RequestBookComponent } from './components/admin/requestedBook/requests.component';
import { UserComponent } from './components/user/user.component';
import { BookListComponent } from './shared/bookList/book-list.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { IssuedBookComponent } from './components/admin/issuedBook/issued-book.component';

import { Grid } from 'ag-grid';



const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent,canActivate:[AuthguardGuard]},
{path:'contact',component:AboutUsComponent},
{ path: 'login', component: LoginComponent,canActivate:[AuthguardGuard] },
{path:'booklist',component:BookCardComponent},
{ path: 'user', component: UserComponent,canActivate:[AuthguardGuard] },
{ path: 'admin', component: AdminComponent,canActivate:[AuthguardGuard]},
{path:'requestbooks',component:RequestBookComponent,canActivate:[AuthguardGuard]},
{path:'bookcard',component:BookCardComponent},
{path:'issuedbooks',component:IssuedBookComponent,canActivate:[AuthguardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
