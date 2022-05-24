import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/components/profile/login/login.component';
import { PassResetComponent } from 'src/app/components/profile/pass-reset/pass-reset.component';
import { SettingsComponent } from 'src/app/components/profile/settings/settings.component';
import { SignupComponent } from 'src/app/components/profile/signup/signup.component';
import { NGZORROModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PassResetComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NGZORROModule,
    AuthRoutingModule,
  ],
  providers: [AuthService]
})
export class AuthModule { }
