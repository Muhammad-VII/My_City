import { MainScreenInterface } from './../interfaces/main-screen-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiKey:string = `3a9cb9d57fba6ea0325f141e98cde6de`

  constructor(private _HttpClient:HttpClient) { }
  getMoviePigaion(pageNumber:number): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }
  // getMainScreen(): Observable<MainScreenInterface> {
  //   return this._HttpClient.get(environment.baseUrl)
  // }
}