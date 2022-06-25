import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const ol:any;
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {
  pageTitle:string = 'Explore'
  constructor() {
    // var map = new ol.Map({
    //   target: 'map',
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   view: new ol.View({
    //     center: ol.proj.fromLonLat([37.41, 8.82]),
    //     zoom: 4
    //   })
    // });
  }

  ngOnInit(): void {
  }

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }

      case 3: {
        this.index = 'fourth-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
}
