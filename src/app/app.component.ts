import { NavigationEnd, Router } from '@angular/router';
import { User } from './model/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dourcode';
  private href: string | undefined;
  user: User | undefined;

  constructor() {
    this.href = window.location.pathname;
  }

  isLogged(): boolean {
    return window.localStorage.getItem('token') != null;
  }

  isNotOnLoginPage() {

    return this.href != '/login' && this.href != '/create-account';
  }

  isLoggedAndIsNotOnLoginPage() {
    return this.isLogged() && this.isNotOnLoginPage;
  }

}
