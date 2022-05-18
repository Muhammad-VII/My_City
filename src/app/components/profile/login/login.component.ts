import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import anime from 'animejs'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  checked = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  submitLogin(loginFormValue: FormGroup) {
    console.log(loginFormValue);
  }
  
  showHidePass(): void {
    let pass:HTMLInputElement = document.getElementById('password')! as HTMLInputElement;
    let pwToggle:HTMLSpanElement = document.querySelector('.pwd-toggle')! as HTMLSpanElement;
    if (pass.type === 'password') {
      pass.type = 'text';
      pwToggle.classList.replace('bi-eye-slash','bi-eye');
    } else if (pass.type === 'text') {
      pass.type = 'password';
      pwToggle.classList.replace('bi-eye','bi-eye-slash');
    }
  }
  ngOnInit(): void {

  }
}
