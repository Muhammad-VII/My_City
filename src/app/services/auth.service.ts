import { Auth } from './../States/Auth_State/AuthModel/auth-model';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
interface AppState {
  Auth: Auth
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token$: Observable<Auth | string>;
  constructor(private _HttpClient:HttpClient, private _Store: Store<AppState>) {
    this.token$ = this._Store.select("Auth").pipe(map(res => {
      if (localStorage.getItem("Token") != null) {
        return localStorage.getItem("Token")!!
      } else {
        return res.JWT
      }
    }))
  }

  login(loginForm: any): Observable<any>{
    return this._HttpClient.post(`https://voltapi.azurewebsites.net/web/login`, loginForm,
      {
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmcgc3RyaW5nMSIsImp0aSI6IjAzYWQwOTM0LWVjNWMtNDM1ZS05MDY5LWYxMjJhMmRiNWQwYyIsImVtYWlsIjoic3RyaW5nIiwiZmlyc05hbWUiOiJzdHJpbmciLCJsYXN0TmFtZSI6InN0cmluZzEiLCJjcmVhdGVkSW4iOiIzLzI2LzIwMjIgMjo0NTowNiBQTSIsIkVtYWlsIjoic3RyaW5nIiwiZXhwIjoxNjQ5NjAxOTA2LCJpc3MiOiJKTUtJc3N1ZXIiLCJhdWQiOiJKTUtBdWRpZW5jZSJ9.kcTqHL7Vi_HnZAF3FvnTciN0dx3xM2AaZbEoJpsLtgk`
        }
      }
    ).pipe(tap((res: any) => {
      localStorage.setItem("Token", res.JWT)
    }))
  }
}
