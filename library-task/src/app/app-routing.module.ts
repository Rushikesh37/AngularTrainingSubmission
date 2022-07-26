import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FloatButtonComponent } from './components/admin/float-button/float-button.component';
import { RequestBookComponent } from './components/admin/request/request-book.component';
import { AuthGuard } from './components/services/auth.guard';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
{ path: 'login', component: LoginComponent,canActivate:[AuthGuard]},
{ path: 'user', component: UserComponent,canActivate:[AuthGuard] },
{ path: 'admin', component: AdminComponent,canActivate:[AuthGuard]},
{path:'requestbooks',component:RequestBookComponent,canActivate:[AuthGuard]},
{path:'float',component:FloatButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
