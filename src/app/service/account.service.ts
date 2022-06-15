import { Auth } from './../model/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http'



import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {

  public auth: Auth | undefined

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    localStorage.getItem('token');
  }

  createAccount(user: User) {
    return this.http.post(`${environment.apiUrl}/user`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



}
