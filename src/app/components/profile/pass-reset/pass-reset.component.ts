import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.scss']
})
export class PassResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  passResetForm: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
  });

  submitPassReset(passResetFormValue: UntypedFormGroup) {
    console.log(passResetFormValue);
  }
}
