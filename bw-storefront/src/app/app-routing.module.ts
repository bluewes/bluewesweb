import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreLocatorComponent } from './common/components/store-locator/store-locator.component';
import { HomeComponent } from './common/components/home/home.component';
import { ProfileComponent } from './common/components/profile/profile.component';


const routes: Routes = [
  { path: 'store-Locator', component: StoreLocatorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
