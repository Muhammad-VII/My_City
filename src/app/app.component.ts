import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';
import * as AuthActions from '../app/States/Auth_State/Actions/auth-actions';
import { Auth } from './States/Auth_State/AuthModel/auth-model';
import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { NotificationService } from './services/notification.service';


interface AppState {
  Auth: Auth;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'my_city_SHOROUK';

  constructor(
    public _Router: Router,
    private _Store: Store<AppState>,
    public _AuthService: AuthService,
    private _NgxSpinner: NgxSpinnerService,
    private toastr: ToastrService,
    private afMessaging: AngularFireMessaging,
    private notificationService: NotificationService,
    private _TranslateService: TranslateService
  ) {
    this.requestedPermission();
    this.listen();
    this._TranslateService.setDefaultLang("en")
    const lang = localStorage.getItem("lang") || "en";
    this._TranslateService.use(lang);
    document.documentElement.lang = lang
    // this._NgxSpinner.show()
    window.onload = () => {
      // this._NgxSpinner.hide()
    }
  }

  requestedPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        // console.log('Permission Generated!');
        // console.log(token);
      },
      (error) => {
        // console.error(error);
      }
    );
  }
  listen() {
    this.afMessaging.messages.subscribe((message: any) => {
      this.toastr.success(message.notification.body, message.notification.title);
      this.notificationService.message.next(message.notification);
      this.notificationService.notificationReceived.next(true);
      this.notificationService.setNotification({
        body: message.notification.body,
        title: message.notification.title,
      });
    });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  onLogin(loginData: UntypedFormGroup) {
    this._AuthService.login(loginData).subscribe((res) => {
      // this._Store.dispatch(AuthActions.login({ JWT: res.JWT, user: res.user }));
    });
  }
}
