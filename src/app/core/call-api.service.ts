import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CallApiService {

  private json_cache;

  constructor(private http: Http) {
  }

  getJSON() {
    if (this.json_cache) {
      return of(this.json_cache);
    }
    return this.http.get('assets/info.json')
      .map(res => {
        this.json_cache = res.json();
        return this.json_cache;
      });
  }

}
