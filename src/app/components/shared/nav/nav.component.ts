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
    const iPoint = 20;
    $(window).on('scroll', () => {
      const wScorll = $(window).scrollTop()!;
      if (wScorll > iPoint) {
        $('nav').css('backgroundColor', '#11828f92');
        $('nav').css('boxShdow', '0px 1px 10px #999');
        $('.color-shift').css('color', '#fff');
      } else {
        $('nav').css('backgroundColor', 'transparent');
        $('.color-shift').css('color', '#707070');
      }
    });
  }
}
