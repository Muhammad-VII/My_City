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
    return this._HttpClient.post(`http://localhost:3000/login`, loginForm).pipe(tap((res: any) => {
      console.log(res);
      // res.cookie("api-auth", res.JWT, {
      //   secure: false,
      //   httpOnly: true,
      //   expire: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7))
      // })
    }))
  }
}
