import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallApiService {

  private json_cache;

  constructor(private http: HttpClient) {
  }

  getJSON() {
    if (this.json_cache) {
      return of(this.json_cache);
    }
    return this.http.get('assets/info.json').pipe(
      map(res => {
        this.json_cache = res;
        return this.json_cache;
      }));
  }

}
