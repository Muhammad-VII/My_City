import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';
import * as AuthActions from '../app/States/Auth_State/Actions/auth-actions';
import { Auth } from './States/Auth_State/AuthModel/auth-model';
import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'my_city_SHOROUK'
  loginForm: FormGroup = new FormGroup({
    AppId: new FormControl('bee4a01a-7260-4e33-a315-fe623f223846'),
    Platform: new FormControl('w'),
    Uid: new FormControl('XwIBtz15PBTSV7ne1oPP1SXvep93'),
    lang: new FormControl(`ar`),
    DeviceId: new FormControl('string'),
    Token: new FormControl('3YGMcZ7ROq_j6aX46zTna5hCzvFGuXBLDfOBBpsgMyI', Validators.required),
    cart: new FormControl([
      {
        "itemID": "5fa3c65a-4cdb-4d11-9591-1af64e4379b8",
        "cartCount": 5
      },{
        "itemID": "de16b3fa-0e0e-4b20-91bc-29a52e0ee38b",
        "cartCount": 6
      },{
        "itemID": "9836a6f0-67fb-49be-b945-7056de3ae76c",
        "cartCount": 7
      }
    ]),
  })

  constructor (public _Router:Router, private _Store:Store, public _AuthService:AuthService) {
    // this._Store.select("Auth").subscribe((Res) => {
    //   console.log(Res.JWT);
    // })
  }

  onLogin(loginData: FormGroup) {
    this._AuthService.login(loginData).subscribe((res) => {
      this._Store.dispatch(AuthActions.login({JWT: res.JWT, user: res.user}));
    })
  }
}
