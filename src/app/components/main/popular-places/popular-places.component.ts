import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-places',
  templateUrl: './popular-places.component.html',
  styleUrls: ['./popular-places.component.scss']
})
export class PopularPlacesComponent implements OnInit {
  pageTitle: string = 'Popular Places';
  constructor() { }
  offers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  openFilter(): void {
    $('.side-filter').slideToggle(300)
  }
  ngOnInit(): void {
  }

}
