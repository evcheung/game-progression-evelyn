import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProfileResponse } from '../../interface/profile-data.interface';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http
      .get<ProfileResponse>(environment.apiUrl + '/profile') // typecasting, observables
      .pipe(
        map(response => {
          console.log('GET REQUEST SUCCESS', response);
          return response;
        })
      );
  }

  // TODO: difference between typing it in paramater vs typecasting?

  updateProfile(profile: ProfileResponse) {
    // console.log('updating');
    return this.http
      .put<ProfileResponse>(environment.apiUrl + '/profile', profile)
      .pipe(
        map(response => {
          console.log('PUT REQUEST SUCCESS', response);
          return response;
        })
      );
  }
}
