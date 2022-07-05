import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private _SharedService: SharedService) { }
  pageTitle: string = 'El-Sherouk City News';
  news: Observable<any> =  this._SharedService.getAllNews(10, 0);

  ngOnInit(): void {
  }

}
