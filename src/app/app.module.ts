import { NGZORROModule } from './ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ImgScanPipe } from './pipes/img-scan.pipe';
import { HomeComponent } from './components/main/home/home.component';
import { ExploreComponent } from './components/main/explore/explore.component';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { NewsComponent } from './components/main/news/news.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { LoginComponent } from './components/profile/login/login.component';
import { SignupComponent } from './components/profile/signup/signup.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PrivacyPolicyComponent } from './components/shared/privacy-policy/privacy-policy.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import * as fromAuth from './States/Auth_State/Reducer/auth-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ParticlesModule } from 'ngx-particle';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { PassResetComponent } from './components/profile/pass-reset/pass-reset.component';
import { HeaderComponent } from './components/shared/header/header.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    SafeHtmlPipe,
    HomeComponent,
    ExploreComponent,
    AboutUsComponent,
    NewsComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    NotfoundComponent,
    ImgScanPipe,
    LoaderComponent,
    PassResetComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      Auth: fromAuth.loginReducer,
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NGZORROModule,
    CarouselModule,
    NgxSpinnerModule,
    ParticlesModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
