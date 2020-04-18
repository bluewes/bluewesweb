import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/components/footer/footer.component';
import { MenuComponent } from './common/components/menu/menu.component';
import { StoreLocatorComponent } from './common/components/store-locator/store-locator.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './common/components/home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './common/components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlacesComponent } from './common/components/google-places/google-places.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    StoreLocatorComponent,
    HomeComponent,
    ProfileComponent,
    GooglePlacesComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
