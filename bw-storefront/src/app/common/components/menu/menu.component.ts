import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private commonService : CommonService) { }
  retailerInfo : any;
  ngOnInit(): void {
    this.commonService.retailerData.subscribe(res => {
       this.retailerInfo = res;
       console.log(this.retailerInfo)
    });

  }

}
