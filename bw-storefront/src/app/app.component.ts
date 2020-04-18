import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router : Router, private commonService : CommonService){}
  
  ngOnInit() {
    this.commonService.getRetailers().subscribe(res => {
      let location = localStorage.getItem('location');
      if (location == null)
        this.router.navigateByUrl('/store-Locator')  
    });
  }
}
