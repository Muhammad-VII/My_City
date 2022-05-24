import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/profile/login/login.component';
import { PassResetComponent } from 'src/app/components/profile/pass-reset/pass-reset.component';
import { SavedPlacesComponent } from 'src/app/components/profile/saved-places/saved-places.component';
import { SettingsComponent } from 'src/app/components/profile/settings/settings.component';
import { SignupComponent } from 'src/app/components/profile/signup/signup.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: SignupComponent },
  { path: 'reset-pass', component: PassResetComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'saved-places', component: SavedPlacesComponent },
  { path: '**', redirectTo: 'settings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
