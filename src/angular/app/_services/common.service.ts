import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { District, Street } from '../_models/common';

@Injectable({ providedIn: 'root' })
export class CommonService {
  constructor(private http: HttpClient) {}

  getDistricts(): Observable<District[]> {
    return this.http
      .get<District[]>(
        `http://${window.location.hostname}:4200/api/` + 'district',
      )
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error) => {
          return throwError(() => new Error('Something went wrong: streets!'));
        }),
      );
  }

  getStreetsByDistrict(districts: number[]): Observable<Street[]> {
    const dist = { districts: districts ?? [] };

    const httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    const httpParams = new HttpParams().set('data', JSON.stringify(dist));

    return this.http
      .get<Street[]>(
        `http://${window.location.hostname}:4200/api/` + 'district/streets',
        {
          headers: httpHeaders,
          params: httpParams,
          responseType: 'json',
        },
      )
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error) => {
          return throwError(() => new Error('Something went wrong: streets!'));
        }),
      );
  }
}
