import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  pageTitle: string = 'Offers';
  constructor() { }
  checked: boolean = false;
  ngOnInit(): void {
  }

}
