import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonService : CommonService) { }

  retailerInfo : any;

  ngOnInit(): void {

    this.commonService.getOption().subscribe(data => {
      this.retailerInfo = data;
    });
  }
}
