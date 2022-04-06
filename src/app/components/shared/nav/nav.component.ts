import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.changeNavbarColor()
  }

  visible = false;
  placement: NzDrawerPlacement = 'right';
  open(): void {
    if (this.visible == false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  close(): void {
    this.visible = false;
  }

  changeNavbarColor(): void {
    const iPoint:number = 100;
    const nav: HTMLDivElement = document.querySelector('nav')! as HTMLDivElement
    window.onscroll = () => {
      if (window.pageYOffset > iPoint) {
        nav.classList.add('bg-orange')
        nav.style.animationName = 'fadeDown'
        nav.classList.remove('bg-transparent')
      } else {
        nav.style.animationName = ''
        nav.classList.add('bg-transparent')
        nav.classList.remove('bg-orange')
      }
    }
  }
}