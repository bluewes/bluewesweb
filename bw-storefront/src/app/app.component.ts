import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router : Router){}
  
  ngOnInit(){
    let location = localStorage.getItem('location');
    if (location == null)
      this.router.navigateByUrl('/store-Locator')
  }
}
