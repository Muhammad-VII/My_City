import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrect-details',
  templateUrl: './distrect-details.component.html',
  styleUrls: ['./distrect-details.component.scss']
})
export class DistrectDetailsComponent implements OnInit {
  pageTitle:string = 'Al Mostkbal';
  constructor() { }

  ngOnInit(): void {
  }

}
