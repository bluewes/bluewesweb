import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css']
})
export class StoreLocatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem('location', JSON.stringify({
          lat : position.coords.latitude,
          long : position.coords.longitude
        }))
      });
    }
  }
}
