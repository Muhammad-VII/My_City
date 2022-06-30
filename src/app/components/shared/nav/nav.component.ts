import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { Subscription } from 'rxjs';
declare const $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit, OnDestroy {
  constructor(
    private _AuthService: AuthService,
    private _Toaster: ToastrService
  ) {
    this.subscribtions.push(
      this._AuthService.token$.subscribe((res) => {
        if (res) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      })
    );
  };
  lang!: string;
  subscribtions: Subscription[] = [];
  checked: boolean = false;
  logoElement: string = `<img id='logo' src='assets/Home/logo.png' width='260px' alt='my_city_logo'/>`;
  isLogin: boolean = false;
  isVisible = false;
  visible = false;
  placement: NzDrawerPlacement = 'left';
  signUpForm: UntypedFormGroup = new UntypedFormBuilder().group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    mobileNumber: ['', [Validators.required]],
  });

  forgetPasswordForm: UntypedFormGroup = new UntypedFormBuilder().group({
    email: ['', [Validators.required, Validators.email]],
  });

  loginForm: UntypedFormGroup = new UntypedFormBuilder().group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submitSignUpForm(): void {
    if (this.signUpForm.valid) {
      this._AuthService.signUp(this.signUpForm.value).subscribe(
        (res) => {
          this.signUpForm.reset();
          $('#signUpModal').modal('hide');
          this._Toaster.success('Account Created Succesfully.', 'Success');
        },
        (err) => {
          this._Toaster.error('Account Already Exists.', 'Error');
        }
      );
    } else {
      Object.values(this.signUpForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  submitLoginForm(): void {
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe(
        (res) => {
          if (res.data.status === 401) {
            this._Toaster.error('Invalid Email or Password.', 'Error');
          } else {
            this.loginForm.reset();
            $('#loginModal').modal('hide');
            this._Toaster.success('Login Successfull', 'Success');
          }
        },
        (err) => {
          this._Toaster.error('Account Does Not Exists', 'Error');
        }
      );
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  submitResetPassForm(): void {
    if (this.forgetPasswordForm.valid) {
      console.log(this.forgetPasswordForm.value);
    } else {
      Object.values(this.forgetPasswordForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  logout():void {
    this._AuthService.logout();
  }
  
  ngOnDestroy(): void {
    this.subscribtions.forEach((sub) => sub.unsubscribe());
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  open(): void {
    if (this.visible == false) {
      document.querySelector('nav')!.classList.add('d-none');
      this.visible = true;
    } else {
      document.querySelector('nav')!.classList.replace('d-none', 'd-block');
      this.visible = false;
    }
  }

  close(): void {
    document.querySelector('nav')!.classList.replace('d-none', 'd-block');
    this.visible = false;
  }

  changeNavbarColor(): void {
    const iPoint: number = 0;
    const nav: HTMLDivElement = document.querySelector(
      'nav'
    )! as HTMLDivElement;
    const logoImg: HTMLDivElement = document.getElementById(
      'logo'
    )! as HTMLImageElement;
    const nav_items = Array.from(
      document.querySelectorAll('.nav-link')! as unknown as HTMLCollection
    );
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('myBar')! as HTMLDivElement;
      if (window.pageYOffset > iPoint) {
        bar.style.width = scrolled + '%';
        nav.classList.add('bg-orange');
        logoImg.setAttribute('src', '../../../../assets/Home/logo-white.png');
        nav.style.animationName = 'fadeDown';
        nav.classList.remove('bg-transparent');
        nav_items.forEach((item) => {
          item.classList.replace('hover-text-main', 'hover-text-dark');
        });
      } else {
        bar.style.width = 0 + '%';
        nav.style.animationName = '';
        nav.classList.add('bg-transparent'),
          logoImg.setAttribute('src', '../../../../assets/Home/logo.png');
        nav.classList.remove('bg-orange');
        nav_items.forEach((item) => {
          item.classList.replace('hover-text-dark', 'hover-text-main');
        });
      }
    };
  }

  changeLanguage(lang?: any): void {
    localStorage.setItem("lang", lang.target.value);
    window.location.reload();
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
    this.changeNavbarColor();
  }
}
