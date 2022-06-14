import { User } from './../../model/user';
import { environment } from './../../../environments/environment';
import { Auth } from './../../model/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: any;


  constructor(private http:HttpClient) {
    this.token = localStorage.getItem('token')
   }


  getSelf() {
    return this.http.get<User>(`${environment.apiUrl}/user`);
  }
}
