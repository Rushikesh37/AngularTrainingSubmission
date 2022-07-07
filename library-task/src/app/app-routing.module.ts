import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { RequestBookComponent } from './components/admin/requestBook/request-book.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [{path:'',component:HomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'user', component: UserComponent },
{ path: 'admin', component: AdminComponent},
{path:'requestbooks',component:RequestBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
