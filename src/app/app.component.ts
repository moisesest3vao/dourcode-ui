import { User } from './model/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dourcode';
  user: User | undefined
  constructor() {
  }

  isLogged():boolean{
    return window.localStorage.getItem('token') != null;
  }

}
