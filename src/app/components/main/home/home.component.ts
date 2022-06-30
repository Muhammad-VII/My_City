import { Observable } from 'rxjs';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageContent: any;
  offers: any[] = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  
  places: any[] = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  news: any[] = [
    {},
    {},
    {},
  ]
  constructor(private _SharedService: SharedService) {
    // this._SharedService.getMainScreen().subscribe(
    //   (data: any) => {
    //     this.pageContent = data;
    //   }
    // )
  }

  inputValue?: string;
  options: string[] = [];
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
    //TODO Calling search api
  }
  customOptions: OwlOptions = {};

  ngOnInit(): void {
    if (localStorage.getItem('lang') == 'ar') {
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        autoplaySpeed: 600,
        autoplayTimeout: 3000,
        margin: 20,
        rtl: true,
        autoplay: true,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          740: {
            items: 3,
          },
          940: {
            items: 4,
          },
        },
        nav: false,
      };
    } else {
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        autoplaySpeed: 600,
        autoplayTimeout: 3000,
        margin: 20,
        rtl: false,
        autoplay: true,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          740: {
            items: 3,
          },
          940: {
            items: 4,
          },
        },
        nav: false,
      };
    }
  }

}
