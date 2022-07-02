import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-explore-details',
  templateUrl: './explore-details.component.html',
  styleUrls: ['./explore-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreDetailsComponent implements OnInit {

  pageTitle: string = 'Explore';
  customOptions!: OwlOptions;
  reviews: any[] = [
    {
      name: 'Ahmed Magdy',
      review:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
    {
      name: 'Ahmed Magdy',
      review:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
    {
      name: 'Ahmed Magdy',
      review:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
    {
      name: 'Ahmed Magdy',
      review:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
  ];
  constructor() { }

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
