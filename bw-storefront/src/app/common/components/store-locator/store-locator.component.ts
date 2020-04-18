import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css']
})
export class StoreLocatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getAddress(event) {
    if (event)
      this.addressSelected(event.geometry.location.lat(), event.geometry.location.lng());
  }

  locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.addressSelected(position.coords.latitude, position.coords.longitude);
      });
    }
  }

  addressSelected(lat, lang) {
    localStorage.setItem('location', JSON.stringify({
      lat: lat,
      long: lang
    }));
    this.router.navigateByUrl('/')
  }
}
