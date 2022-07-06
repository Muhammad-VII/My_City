import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-places',
  templateUrl: './popular-places.component.html',
  styleUrls: ['./popular-places.component.scss']
})
export class PopularPlacesComponent implements OnInit {
  pageTitle: string = 'Popular Places';
  constructor(private _SharedService: SharedService) {}
  places: Observable<any> = this._SharedService.getAllPlaces(5, 0);
  openFilter(): void {
    $('.side-filter').slideToggle(300)
  }
  ngOnInit(): void {
  }

}
