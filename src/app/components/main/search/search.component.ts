import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  pageTitle: string = 'Search';
  offers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  openFilter(): void {
    $('.side-filter').slideToggle(300)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
