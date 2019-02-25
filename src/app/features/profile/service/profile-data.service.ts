import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Response {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
}
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  getProfile() {
    // doing this without rxjs
    // return this.http.get<Response>(this.baseUrl + '/profile') // typecasting, observables

    // doing this with rxjs operators
    // centralizing the GET request so I am not extracting the data every time in components

    return this.http.get<Response>(this.baseUrl + '/profile') // typecasting, observables
      .pipe(map(
        (response) => {
          console.log('GET REQUEST SUCCESS', response);
          return response;
        }
      ),
      catchError(err => err));
  }

  updateProfile(profile: {}) {
    return this.http.put<Response>(this.baseUrl + '/profile', profile);
  }
}
