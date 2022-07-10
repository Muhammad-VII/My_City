import { LanguageInterceptor } from './interceptors/language.interceptor';
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
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ImgScanPipe } from './pipes/img-scan.pipe';
import { HomeComponent } from './components/main/home/home.component';
import { ExploreComponent } from './components/main/explore/explore.component';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { NewsComponent } from './components/main/news/news.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import * as fromAuth from './States/Auth_State/Reducer/auth-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ParticlesModule } from 'ngx-particle';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AnimationComponent } from './components/shared/animation/animation.component';
import { HelpComponent } from './components/main/help/help.component';
import { ToastrModule } from 'ngx-toastr';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { SavedPlacesComponent } from './components/profile/saved-places/saved-places.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { PopularPlacesComponent } from './components/main/popular-places/popular-places.component';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { PolicyComponent } from './components/main/policy/policy.component';
import { SearchComponent } from './components/main/search/search.component';
import { ReviewsComponent } from './components/main/reviews/reviews.component';
import { ShowMoreDirective } from './directives/seemore.directive';
import { ExploreDetailsComponent } from './components/main/explore-details/explore-details.component';
import { TransportaionComponent } from './components/main/transportaion/transportaion.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { MedicalComponent } from './components/categories/medical/medical.component';
import { ShoppingComponent } from './components/categories/shopping/shopping.component';
import { ServicesComponent } from './components/categories/services/services.component';
import { EntertainmentComponent } from './components/categories/entertainment/entertainment.component';
import { FoodComponent } from './components/categories/food/food.component';
import { BusDetailsComponent } from './components/main/bus-details/bus-details.component';
import { SarayaComponent } from './components/main/buses/saraya/saraya.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    NavComponent,
    FooterComponent,
    NotfoundComponent,
    ImgScanPipe,
    LoaderComponent,
    HeaderComponent,
    AnimationComponent,
    HelpComponent,
    SettingsComponent,
    SavedPlacesComponent,
    OffersComponent,
    PopularPlacesComponent,
    HowItWorksComponent,
    PolicyComponent,
    SearchComponent,
    ReviewsComponent,
    ShowMoreDirective,
    ExploreDetailsComponent,
    TransportaionComponent,
    CategoryDetailsComponent,
    MedicalComponent,
    ShoppingComponent,
    ServicesComponent,
    EntertainmentComponent,
    FoodComponent,
    BusDetailsComponent,
    SarayaComponent,
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
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true,
    },
    HttpClient,
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
