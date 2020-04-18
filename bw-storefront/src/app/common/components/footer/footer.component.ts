import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  retailerInfo: any;
  ngOnInit(): void {
    this.commonService.retailerData.subscribe(res => {
      this.retailerInfo = res;
    });
  }

}
