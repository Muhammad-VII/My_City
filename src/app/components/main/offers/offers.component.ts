import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  pageTitle: string = 'Offers';
  constructor(private _SharedService: SharedService) {}
  offers: Observable<any> = this._SharedService.getAllOffers(5, 0);
  openFilter(): void {
    $('.side-filter').slideToggle(300)
  }
  ngOnInit(): void {
    
  }

}
