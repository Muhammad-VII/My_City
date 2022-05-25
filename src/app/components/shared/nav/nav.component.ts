import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { Subject, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit, OnDestroy {
  subscribtions: Subscription[] = []
  logoElement:string = `<img id='logo' src='assets/Home/logo.png' width='260px' alt='my_city_logo'/>`
  isLogin: boolean = false
  isVisible = false;
  visible = false;
  placement: NzDrawerPlacement = 'left';
  constructor(private fb: FormBuilder, private _AuthService:AuthService) {
    this.subscribtions.push(
      this._AuthService.token$.subscribe(res => {
        if (res) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscribtions.forEach(sub => sub.unsubscribe())
  }

  logout() {
    // TODO: CALL AUTH SERVICE TO LOGOUT
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  open(): void {
    if (this.visible == false) {
      document.querySelector('nav')!.classList.add('d-none')
      this.visible = true;
    } else {
      document.querySelector('nav')!.classList.replace('d-none', 'd-block')
      this.visible = false;
    }
  }

  close(): void {
    document.querySelector('nav')!.classList.replace('d-none', 'd-block')
    this.visible = false;
  }

  changeNavbarColor(): void {
    const iPoint:number = 0;
    const nav: HTMLDivElement = document.querySelector('nav')! as HTMLDivElement
    const logoImg: HTMLDivElement = document.getElementById('logo')! as HTMLImageElement
    const nav_items = Array.from(document.querySelectorAll('.nav-link')! as unknown as HTMLCollection)
    window.onscroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const bar = document.getElementById("myBar")! as HTMLDivElement
      if (window.pageYOffset > iPoint) {
        bar.style.width = scrolled + "%";
        nav.classList.add('bg-orange');
        logoImg.setAttribute("src", "../../../../assets/Home/logo-white.png");
        nav.style.animationName = 'fadeDown'
        nav.classList.remove('bg-transparent')
        nav_items.forEach(item => {
          item.classList.replace('hover-text-main', 'hover-text-dark')
        })
      } else {
        bar.style.width = 0 + "%";
        nav.style.animationName = ''
        nav.classList.add('bg-transparent'),
        logoImg.setAttribute("src", "../../../../assets/Home/logo.png");
        nav.classList.remove('bg-orange');
        nav_items.forEach(item => {
          item.classList.replace('hover-text-dark', 'hover-text-main')
        })
      }
    }
  }
  validateForm!: FormGroup;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
  ngOnInit(): void {
    this.changeNavbarColor()
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}