import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  checked = true;
  signUp: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
    phoneNumber: new UntypedFormControl(null, [Validators.required, Validators.maxLength(11)]),
    age: new UntypedFormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
  });

  submitSignUp(signUpFormValue: UntypedFormGroup) {
    console.log(signUpFormValue);
  }
  ngOnInit(): void {
  }

}
