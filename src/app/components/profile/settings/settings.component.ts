import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  pageTitle = 'Account Settings';
  buttonShowen: boolean = false;
  subscribtion: Subscription[] = [];
  constructor() {
    this.subscribtion.push(
      this.settingsForm.valueChanges.subscribe((value) => {
        if (this.settingsForm.valid) {
          this.buttonShowen = true;
        } else {
          this.buttonShowen = false;
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscribtion.forEach((sub) => {
      sub.unsubscribe();
    })
  }
  messageRecevied: boolean = false;
  settingsForm: FormGroup = new FormGroup({
    name: new FormControl({value: null, disabled: true}, [Validators.required, Validators.minLength(3)]),
    email: new FormControl({value: null, disabled: true}, [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    phone: new FormControl({value: null, disabled: true}, [
      Validators.required,
      Validators.minLength(10),
    ]),
    password: new FormControl({value: null, disabled: true}, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  unlockEditFn(): void {
    this.settingsForm.controls['name'].enable();
    this.settingsForm.controls['email'].enable();
    this.settingsForm.controls['phone'].enable();
    this.settingsForm.controls['password'].enable();
  }

  submitSettingsForm() {
    if (this.settingsForm.valid) {
      this.messageRecevied = true;
      this.settingsForm.reset();
      setTimeout(() => {
        this.messageRecevied = false;
      }, 5000);
    } else {
      Object.values(this.settingsForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnInit(): void {}
}
