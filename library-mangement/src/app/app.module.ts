import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/registration/nav/nav.component';
import { LoginComponent } from './Shared/registration/login/login.component';
import { RegistrationComponent } from './Shared/registration/registration.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { DialogBoxComponent } from './Shared/registration/dialog-box/dialog-box.component';
import { HomeComponent } from './Shared/registration/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';


import { AdmindashComponent } from './admin/admindash/admindash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { BooklistComponent } from './booklist/booklist.component';
import { AboutusComponent } from './Shared/registration/aboutus/aboutus.component';
import { ContactusComponent } from './Shared/registration/contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';

import {MatBadgeModule} from '@angular/material/badge';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AddbookformComponent } from './addbookform/addbookform.component';









@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    DialogBoxComponent,
    BookCardsComponent,
    HomeComponent,
    AdminComponent,
    SidenavComponent,
    AdmindashComponent,
    BooklistComponent,
    AboutusComponent,
    ContactusComponent,
    UserlistComponent,
    AddbookformComponent,
   
   
   
  
  
 
  
    
  ],
  entryComponents:[LoginComponent],
  imports: [
    AppRoutingModule,
    MaterialModule,
    MatTableModule,
    MatBadgeModule,
    HttpClientModule,

 
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
