import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CallApiService {

  private json_cache;

  constructor(private http: Http) {
  }

  getJSON() {
    if (this.json_cache) {
      return Observable.of(this.json_cache);
    }
    return this.http.get('assets/info.json')
      .map(res => {
        this.json_cache = res.json();
        return this.json_cache;
      });
  }

}
