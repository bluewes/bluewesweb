import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient : HttpClient) { }

  private retailerSource = new BehaviorSubject<any>(null);
  public retailerData = this.retailerSource.asObservable();

  getOption() {
    return this.httpClient.get(environment.APIUrl + 'api/Cms/get/1')
      .pipe(map(option => {
        return option;
      }));
  }

  getRetailers() {
    if (this.retailerSource.value != null) {
      return this.retailerSource.asObservable();
    }
    else {
      return this.httpClient.get(environment.APIUrl + 'api/Retailer/GetRetailerFromUrl?url=' + window.location.host)
        .pipe(map(option => {
          this.retailerSource.next(option);
          return option;
        }));
    }
  }
}
