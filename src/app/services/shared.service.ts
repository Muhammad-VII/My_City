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

  constructor(private _HttpClient:HttpClient) { 
  }
  getMainScreen(): any
  {
    return this._HttpClient.get(`https://my-city-el-sherouk.herokuapp.com/homePage/getOne`)
  }
}