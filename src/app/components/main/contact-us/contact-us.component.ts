import { SharedService } from 'src/app/services/shared.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  pageTitle: string = 'Contact Us';
  messageRecevied: boolean = false;
  constructor(private _ToasterService: ToastrService, private _SharedService: SharedService) {}
  contactForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
    email: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    message: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitContactForm() {
    if (this.contactForm.valid) {
        this._SharedService.addContact(this.contactForm.value).subscribe((data) => {
        if (data.message) {
        this._ToasterService.success('Message sent successfully');
        this.contactForm.reset();
        } else {
        this._ToasterService.error('Something went wrong');
        }
      })
    } else {
      Object.values(this.contactForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnInit(): void {}
}
