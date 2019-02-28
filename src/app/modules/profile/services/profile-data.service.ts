import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../interface/components/profile/profile-data.interface';
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getProfile() {
    // doing this without rxjs
    // return this.http.get<Response>(this.baseUrl + '/profile') // typecasting, observables

    // doing this with rxjs operators
    // centralizing the GET request so I am not extracting the data every time in components

    return this.http.get<Response>(environment.apiUrl + '/profile') // typecasting, observables
      .pipe(map(
        (response) => {
          console.log('GET REQUEST SUCCESS', response);
          return response;
        }
      ),
      catchError(err => err));
  }

  // updateProfile(profile: {}) {
  //   return this.http.put<Response>(this.baseUrl + '/profile', profile);
  // }

  updateProfile(profile: {}) {
    return this.http.put<Response>(environment.apiUrl + '/profile', profile)
      .pipe(map(
        response => {
          console.log('PUT REQUEST SUCCESS', response);
          return response;
        }
      ),
      catchError(err => err));
  }
}
