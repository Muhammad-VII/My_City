import { SarayaComponent } from './components/main/buses/saraya/saraya.component';
import { BusDetailsComponent } from './components/main/bus-details/bus-details.component';
import { ServicesComponent } from './components/categories/services/services.component';
import { EntertainmentComponent } from './components/categories/entertainment/entertainment.component';
import { DistrectDetailsComponent } from './components/main/distrect-details/distrect-details.component';
import { TransportaionComponent } from './components/main/transportaion/transportaion.component';
import { ExploreDetailsComponent } from './components/main/explore-details/explore-details.component';
import { ReviewsComponent } from './components/main/reviews/reviews.component';
import { SearchComponent } from './components/main/search/search.component';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { PopularPlacesComponent } from './components/main/popular-places/popular-places.component';
import { SavedPlacesComponent } from './components/profile/saved-places/saved-places.component';
import { HelpComponent } from './components/main/help/help.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { ExploreComponent } from './components/main/explore/explore.component';
import { HomeComponent } from './components/main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { NewsComponent } from './components/main/news/news.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { AuthGuard } from './gurds/auth.guard';
import { OffersComponent } from './components/main/offers/offers.component';
import { PolicyComponent } from './components/main/policy/policy.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { MedicalComponent } from './components/categories/medical/medical.component';
import { ShoppingComponent } from './components/categories/shopping/shopping.component';
import { FoodComponent } from './components/categories/food/food.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'transportaion',
    component: TransportaionComponent,
  },
  { path: 'story', component: AboutUsComponent },
  { path: 'distrect-details', component: DistrectDetailsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'category-details', component: CategoryDetailsComponent, children: [
    { path: 'medical', component: MedicalComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'food', component: FoodComponent },
    { path: 'entertainment', component: EntertainmentComponent },
    { path: 'services', component: ServicesComponent },
    {
      path: '**', redirectTo: 'medical', pathMatch: 'full'
    }
  ]},
  { path: 'bus-details', component: BusDetailsComponent, children: [
    { path: "saraya", component: SarayaComponent}
  ]},
  { path: 'help', component: HelpComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'trend-places', component: PopularPlacesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'privacy-policy', component: PolicyComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'saved-places', component: SavedPlacesComponent },
      { path: '**', redirectTo: 'settings', pathMatch: 'full' },
    ],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
