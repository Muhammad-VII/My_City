import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent implements OnInit {
  pageTitle: string = `Explore`;
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
  constructor() {}

  ngOnInit(): void {}
}
