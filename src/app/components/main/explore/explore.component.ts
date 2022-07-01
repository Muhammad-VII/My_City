import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const ol: any;
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExploreComponent implements OnInit {
  pageTitle: string = 'Explore';
  showStepper = true;

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

  distrects: any[] = [
    {
      imgUrl: 'tromso-forsidebilde-vinter-1-scaled.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'bergen-frontpage-2560x1706-1.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'asker-frontpage-2560x1464-1.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'bergen-frontpage-2560x1706-1.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'forsidebilde-stavanger-2560x1831-1.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },
    {
      imgUrl: 'forsidebilde-stavern-citadellet-2560x1831-1.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'kristiansandcity.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'oslo-aker-brygge-clock-tower-2600x873-1-scaled.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },

    {
      imgUrl: 'oslo-akershus-festning-scaled.jpg',
      title: "Distrect title",
      describtion: `The weather in Trondheim For more than a thousand years, Trondheim has been a center for development of science, culture, infrastructure and innovation.`,
      link: 'https://www.trondheim.no/',
    },
  ];

  scrollDown():void {
    const articleOffset: number = document.getElementById('explore-section')!.offsetTop;
    window.scrollTo(0, articleOffset);
  }

  ngOnInit(): void {}
}
