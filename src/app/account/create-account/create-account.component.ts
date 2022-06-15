import { User } from './../../model/user';
import { AccountService } from './../../service/account.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {


  form: FormGroup;
  user: Auth | undefined;
  error: boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private accountService: AccountService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]

    });
  }

  ngOnInit(): void {

  }

  login() {
    this.router.navigate(['/login'])
  }



  criarConta() {

    if (this.form.valid) {
      let userDto: User = {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
      }

      this.accountService.createAccount(userDto).subscribe(data => {
        this.authService.login(this.form.get('email')?.value, this.form.get('password')?.value)
          .subscribe(
            (data: Auth) => {
              this.authenticate(data);
              this.router.navigateByUrl('/');
            }, error => {
              this.error = true;
            }
          );
      });
    }
  }

  authenticate(auth: Auth): void {
    window.localStorage.setItem('token', auth.token);
  }


}
