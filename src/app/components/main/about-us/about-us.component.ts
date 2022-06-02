import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  pageTitle: string = 'Get to know us';
  swithToDark(): string {
    const about_section: HTMLDivElement = document.querySelector('.about-story')! as HTMLDivElement;
    about_section.classList.toggle("dark");
    return about_section.classList.contains("dark") ? "Turn Off Lights" : "Turn On Lights";
  }

  ngOnInit(): void {}
}