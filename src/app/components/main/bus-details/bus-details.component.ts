import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {
  buses: any[] = [
    {
      busNumber: "NS 5",
      busTitle: "Abbasia",
      // imgUrl: 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
