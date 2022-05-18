import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  checked = true;
  signUp: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    age: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
  });

  submitSignUp(signUpFormValue: FormGroup) {
    console.log(signUpFormValue);
  }
  ngOnInit(): void {
  }

}
