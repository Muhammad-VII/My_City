import { MainScreenInterface } from './../interfaces/main-screen-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiKey: string = `3a9cb9d57fba6ea0325f141e98cde6de`;

  constructor(private _HttpClient: HttpClient) {}

  searchPlaces(searchTerm: string): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}shared/search?term=${searchTerm}`);
  }

  getAllOffers(take: number = 5, skip: number = 0): Observable<any> {
    return this._HttpClient
      .get<MainScreenInterface>(
        `${environment.apiUrl}shared/getAllOffers?skip=${skip}&limit=${take}`
      )
      .pipe(map((data: any) => data.data));
  }

  getAllPlaces(take: number = 5, skip: number = 0): Observable<any> {
    return this._HttpClient
      .get<MainScreenInterface>(
        `${environment.apiUrl}shared/getAllPlaces?skip=${skip}&limit=${take}`
      )
      .pipe(map((data: any) => data.data));
  }

  getAllNews(take: number = 5, skip: number = 0): Observable<any> {
    return this._HttpClient
      .get<MainScreenInterface>(
        `${environment.apiUrl}shared/getAllNews?skip=${skip}&limit=${take}`
      )
      .pipe(map((data: any) => data.data));
  }

  addContact(contact: any): Observable<any> {
    return this._HttpClient.post(
      `${environment.apiUrl}shared/contactUs`,
      contact
    );
  }
}
