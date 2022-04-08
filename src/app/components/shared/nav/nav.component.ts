import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  constructor() {}
  logoElement:string = `<img id='logo' src='assets/Home/logo.png' alt='my_city_logo'/>`
  ngOnInit(): void {
    this.changeNavbarColor()
  }

  visible = false;
  placement: NzDrawerPlacement = 'right';
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
    const iPoint:number = 250;
    const nav: HTMLDivElement = document.querySelector('nav')! as HTMLDivElement
    const logoImg: HTMLDivElement = document.getElementById('logo')! as HTMLImageElement
    const nav_items = Array.from(document.querySelectorAll('.nav-link')! as unknown as HTMLCollection)
    window.onscroll = () => {
      if (window.pageYOffset > iPoint) {
        nav.classList.add('bg-orange');
        logoImg.setAttribute("src", "../../../../assets/Home/logo-white.png");
        nav.style.animationName = 'fadeDown'
        nav.classList.remove('bg-transparent')
        nav_items.forEach(item => {
          item.classList.replace('hover-text-main', 'hover-text-dark')
        })
      } else {
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
}