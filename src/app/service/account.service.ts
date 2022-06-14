import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: any;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        localStorage.getItem('user')
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
        this.user = this.userSubject.asObservable();
    }

    logout() {
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/login']);
  }

    refreshToken(user:any) {

        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  user.token)
          }


        return this.http.post<User>(`${environment.apiUrl}/api/refresh`,header)
            .pipe(map((user) => {

                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

}
