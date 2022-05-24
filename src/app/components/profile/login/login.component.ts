import { AuthService } from '../../../modules/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private _AuthService: AuthService) {}

  checked = true;
  subscriptions: Subscription[] = [];
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  submitLogin(loginFormValue: FormGroup) {
    this.subscriptions.push(
      this._AuthService.login(loginFormValue).subscribe((res) => {
        // console.log(res.data.access_token);
      })
    );
  }

  showHidePass(): void {
    let pass: HTMLInputElement = document.getElementById(
      'password'
    )! as HTMLInputElement;
    let pwToggle: HTMLSpanElement = document.querySelector(
      '.pwd-toggle'
    )! as HTMLSpanElement;
    if (pass.type === 'password') {
      pass.type = 'text';
      pwToggle.classList.replace('bi-eye-slash', 'bi-eye');
    } else if (pass.type === 'text') {
      pass.type = 'password';
      pwToggle.classList.replace('bi-eye', 'bi-eye-slash');
    }
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
