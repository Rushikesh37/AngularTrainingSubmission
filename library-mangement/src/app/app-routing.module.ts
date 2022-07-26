import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';




import { BookCardsComponent } from './book-cards/book-cards.component';
import { DialogBoxComponent } from './Shared/registration/dialog-box/dialog-box.component';
import { HomeComponent } from './Shared/registration/home/home.component';
import { NavComponent } from './Shared/registration/nav/nav.component';
import { RegistrationComponent } from './Shared/registration/registration.component';
import { ContactusComponent } from './Shared/registration/contactus/contactus.component';
import { UserlistComponent } from './admin/userlist/userlist.component';



const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'contactus',component:ContactusComponent},
  
  {path:'home/books',component:BookCardsComponent},
  {path:'admin',component:SidenavComponent,children:
  [{
   path:'book',component:BooklistComponent
  }]},
  {path:'userlist',component:UserlistComponent},


  {path:'booklist',component:BooklistComponent}
  
 

 



 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
