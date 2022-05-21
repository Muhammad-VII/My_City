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
    'How do I get started?',
    'How do I get started?',
    'How do I get started?',
    'How do I get started?',
    'How do I get started?',
  ];
  constructor() { }
  wrapWordFn(): void {
    this.wrapWord ? this.wrapWord = false : this.wrapWord = true;
  }
  ngOnInit(): void {
  }

}
