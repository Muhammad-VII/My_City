import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  passResetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  submitPassReset(passResetFormValue: FormGroup) {
    console.log(passResetFormValue);
  }
}
