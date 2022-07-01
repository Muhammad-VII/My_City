import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  pageTitle: string = 'Help';
  wrapWord: boolean = false;

  questions: any[] = [
    {
      question: 'What is the purpose of this application?',
      answer:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },

    {
      question: 'What is the purpose of this application?',
      answer:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
    {
      question: 'What is the purpose of this application?',
      answer:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
    {
      question: 'What is the purpose of this application?',
      answer:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
    {
      question: 'What is the purpose of this application?',
      answer:
        'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.',
    },
  ];
  constructor() {}

  wrapWordFn(): void {
    this.wrapWord ? (this.wrapWord = false) : (this.wrapWord = true);
  }

  ngOnInit(): void {}
}
