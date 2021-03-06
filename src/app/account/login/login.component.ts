import { Auth } from './../../model/auth';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: Auth | undefined;
  error: boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          (data: Auth) => {
            this.authenticate(data);
            this.router.navigateByUrl('/').then(() => {
              window.location.reload();
            });
          }, error => {
            this.error = true;
          }
        );
    }
  }

  authenticate(auth: Auth): void {
    window.localStorage.setItem('token', auth.token);
  }

  criarConta() {
    this.router.navigate(['/create-account'])
  }

}


