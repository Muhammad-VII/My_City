import { Component, OnInit } from '@angular/core';
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