import { ReviewsComponent } from './components/reviews/reviews.component';
import { SearchComponent } from './components/main/search/search.component';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { PopularPlacesComponent } from './components/main/popular-places/popular-places.component';
import { SavedPlacesComponent } from './components/profile/saved-places/saved-places.component';
import { HelpComponent } from './components/main/help/help.component';
import { PassResetComponent } from './components/profile/pass-reset/pass-reset.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { SignupComponent } from './components/profile/signup/signup.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { ExploreComponent } from './components/main/explore/explore.component';
import { HomeComponent } from './components/main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { LoginComponent } from './components/profile/login/login.component';
import { NewsComponent } from './components/main/news/news.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { AuthGuard } from './gurds/auth.guard';
import { OffersComponent } from './components/main/offers/offers.component';
import { PolicyComponent } from './components/main/policy/policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'story', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'trend-places', component: PopularPlacesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'privacy-policy', component: PolicyComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'profile',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registeration', component: SignupComponent },
      { path: 'reset-pass', component: PassResetComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'saved-places', component: SavedPlacesComponent },
      { path: '**', redirectTo: 'settings', pathMatch: 'full' },
    ],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
