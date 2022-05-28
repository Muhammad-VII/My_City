import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  pageTitle: string = 'Get to know us';
  swithToDark(): void {
    const about_section: HTMLDivElement = document.querySelector('.about-story')! as HTMLDivElement;
    about_section.classList.toggle("dark")
  }
  ngOnInit(): void {
  }

}
