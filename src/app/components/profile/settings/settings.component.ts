import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
  constructor(private AuthService: AuthService, private _ToasterService: ToastrService) {
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
  settingsForm: UntypedFormGroup = new UntypedFormGroup({
    fullName: new UntypedFormControl({value: null, disabled: true}, [Validators.required, Validators.minLength(3)]),
    email: new UntypedFormControl({value: null, disabled: true}, [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new UntypedFormControl({value: null, disabled: true}, [
      Validators.required,
      Validators.minLength(6),
    ]),
    mobileNumber: new UntypedFormControl({value: null, disabled: true}, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  unlockEditFn(): void {
    this.settingsForm.controls['fullName'].enable();
    this.settingsForm.controls['email'].enable();
    this.settingsForm.controls['mobileNumber'].enable();
    this.settingsForm.controls['password'].enable();
  }

  submitSettingsForm() {
    if (this.settingsForm.valid) {
      this.AuthService.updateUser(this.settingsForm.value).subscribe((data) => {
        if (data.user) {
          this._ToasterService.success('User Updated Successfully');
          this.settingsForm.reset();
        } else {
          this._ToasterService.error('Something went wrong');
        }
      }, (err) => {
        this._ToasterService.error('Something went wrong');
      })
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
