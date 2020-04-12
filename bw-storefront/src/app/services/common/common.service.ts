import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient : HttpClient) { }

  getOption() {
    return this.httpClient.get(environment.APIUrl + 'api/Cms/get/1')
      .pipe(map(option => {
        return option;
      }));
  }
}
