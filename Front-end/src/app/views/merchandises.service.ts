import { IMerchandise } from './IMerchandise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MerchandisesService {
  merchandisesUrl = 'http://localhost:9090/merchandises/';

  constructor(private http: HttpClient) {}

  getMerchandises(): Observable<any> {
    return this.http.get<IMerchandise>(this.merchandisesUrl);
  }
}
