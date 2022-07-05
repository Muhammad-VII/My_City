import { environment } from 'src/environments/environment';
import { Auth } from './../States/Auth_State/AuthModel/auth-model';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../app/States/Auth_State/Actions/auth-actions';
import jwtDecode from 'jwt-decode'
interface AppState {
  Auth: Auth;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token$: Observable<Auth | string>;
  user:any = jwtDecode(localStorage.getItem('Token')!);
  constructor(
    private _HttpClient: HttpClient,
    private _Store: Store<AppState>
  ) {
    this.token$ = this._Store.select('Auth').pipe(
      map((res: any) => {
        if (localStorage.getItem('Token') != null) {
          return localStorage.getItem('Token')!;
        } else {
          return res.access_token;
        }
      })
    );
  }

  saveCurrentUser(token: string): void {
    this._Store.dispatch(AuthActions.login({ access_token: token }));
    localStorage.setItem('Token', token);
  }

  signUp(signUpForm: any): Observable<any> {
    return this._HttpClient.post(
      'https://my-city-el-sherouk.herokuapp.com/register',
      signUpForm
    );
  }

  login(loginForm: any): Observable<any> {
    return this._HttpClient
      .post(`https://my-city-el-sherouk.herokuapp.com/login`, loginForm)
      .pipe(
        tap((res: any) => {
          if (res.data.access_token) {
            this.saveCurrentUser(res.data.access_token);
          } else {
            // alert("Invalid Credentials")
          }
        })
      );
  }

  updateUser(user: any): Observable<any> {
    return this._HttpClient.patch(
      `${environment.apiUrl}users/updateUser?id=${this.user.id}`,
      user,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    );
  }
  logout(): void {
    localStorage.removeItem('Token');
    this._Store.dispatch(AuthActions.logout());
  }
}
