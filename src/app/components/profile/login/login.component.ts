import { Component, OnInit } from '@angular/core';
import anime from 'animejs'; 
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var design = anime({
      targets: 'svg #XMLID5',
      keyframes: [
        {translateX: -500},
        {rotateY: 180},
        {translateX: 920},
        {rotateY: 0},
        {translateX: -500},
        {rotateY: 180},
        {translateX: -500},
      ],
      easing: 'easeInOutSine',
      duration: 60000,
    });
    
    anime({
      targets: '#dust-paarticle path',
      translateY: [10, -150],
      direction: 'alternate',
      loop: true,
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      }
    });
  }
}
