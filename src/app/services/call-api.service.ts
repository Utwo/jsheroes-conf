import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallApiService {

  private jsonCache;

  constructor(private http: HttpClient) {
  }

  getJSON() {
    if (this.jsonCache) {
      return of(this.jsonCache);
    }
    return this.http.get('assets/info.json').pipe(
      map(res => {
        this.jsonCache = res;
        return this.jsonCache;
      }));
  }

}
