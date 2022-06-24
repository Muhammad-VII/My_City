import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  pageTitle:string = 'Help'
  wrapWord:boolean = false;

  questions: any[] = [
    {
      question: 'What is the purpose of this application?',
      answer: 'This application is designed to help you to learn the basics of the English language. It will help you to understand the meaning of the words and phrases, and to practice the correct usage of the words and phrases. It will also help you to improve your English language skills.'
    },
    {
      question: 'How do I use this application?',
      answer: 'You can use this application in two ways 1. You can use the search bar to search for the words and phrases you want to learn 2. You can use the menu to navigate through the different sections of the application.'
    },
    {
      question: 'How do I search for a word or phrase?',
      answer: 'You can use the search bar to search for the words and phrases you want to learn.'
    },
    {
      question: 'How do I navigate through the different sections of the application?',
      answer: 'You can use the menu to navigate through the different sections of the application.'
    },
    {
      question: 'How do I learn the meaning of a word or phrase?',
      answer: 'You can click on the word or phrase you want to learn, and then you will see the meaning of the word or phrase.'
    },
    {
      question: 'How do I practice the correct usage of a word or phrase?',
      answer: 'You can click on the word or phrase you want to practice, and then you will see the correct usage of the word or phrase.'
    },
    {
      question: 'How do I improve my English language skills?',
      answer: 'You can click on the word or phrase you want to practice, and then you will see the correct usage of the word or phrase.'
    }
  ];
  constructor() { }
  
  wrapWordFn(): void {
    this.wrapWord ? this.wrapWord = false : this.wrapWord = true;
  }

  ngOnInit(): void {
  }

}
