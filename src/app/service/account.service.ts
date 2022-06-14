import { Auth } from './../model/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  logout() {
    console.log(localStorage.getItem('token'));

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



}
