import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    public authenticate: AuthenticateService
  ) {}

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  openRegDialog() {
    this.dialog.open(RegisterComponent);
  }

  bookList() {
    this.router.navigateByUrl('bookcard');
  }
}
