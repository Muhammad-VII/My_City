import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-places',
  templateUrl: './saved-places.component.html',
  styleUrls: ['./saved-places.component.scss']
})
export class SavedPlacesComponent implements OnInit {
  pageTitle: string = 'Saved Places';
  places: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }
  
  ngOnInit(): void {
  }

}
