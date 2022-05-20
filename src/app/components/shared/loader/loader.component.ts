import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(private _NgxSpinner: NgxSpinnerService) {}

  ngOnInit(): void {
    window.onload = () => {
      this._NgxSpinner.hide()
    }
    // var loader = document.querySelector('.loader')!;
    // window.onload = () => {
    //   loader.classList.add('loaded');
    //   setTimeout(() => {
    //     loader.classList.add('hide-loader');
    //   }, 1000);
    // }
    // anime({
    //   targets: 'line',
    //   translateX: [
    //     { value: 270, duration: 1000, easing: 'easeOutSine' },
    //     { value: 0, duration: 1000, easing: 'easeOutSine' },
    //   ],
    //   delay: anime.stagger(100, { grid: [16, 10], from: 7 }),
    //   loop: true,
    // });
  }
}
