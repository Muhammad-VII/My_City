import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  pageTitle: string = 'Offers';
  offers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }
  checked: boolean = false;
  openFilter(): void {
    $('.side-filter').slideToggle(300)
  }
  ngOnInit(): void {
    
  }

}
