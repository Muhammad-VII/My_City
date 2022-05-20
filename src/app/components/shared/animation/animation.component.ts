import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  myStyle: object = {
    'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  myParams: any = {
    particles: {
      number: {
          value: 100,
      },
      color: {
          value: '#da520c'
      },
      shape: {
          type: 'circle',
      },
      line_linked: {
        "enable": false,
        "distance": 50,
        "color": "#da520c",
        "opacity": 1,
        "width": 1
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1
            }
          },
        },
      }
    },
  };
  width: number = 100;
  height: number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
