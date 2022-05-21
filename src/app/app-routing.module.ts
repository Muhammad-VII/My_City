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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'news', component: NewsComponent },
  {
    path: 'profile',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registeration', component: SignupComponent },
      { path: 'reset-pass', component: PassResetComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
