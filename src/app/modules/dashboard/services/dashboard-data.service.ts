import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../interface/components/profile/profile-data.interface';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getIncompleteGames() {
    return this.http
      .get<Response>(environment.apiUrl + '/games?isComplete=false')
      .pipe(
        map(response => response),
        catchError(err => err)
      );
  }

  // better to do just 1 REST call and get all the games, then separate into different state slices?
  // like incomplete games, completed, etc
  // then loop through and use for calculations?
  // Should the data be stored into arrays then?

  // or do different calls with parameters and avoid turning into arrays for looping?

  // updateProfile(profile: {}) {
  //   return this.http
  //     .put<Response>(environment.apiUrl + "/profile", profile)
  //     .pipe(
  //       map(response => {
  //         console.log("PUT REQUEST SUCCESS", response);
  //         return response;
  //       }),
  //       catchError(err => err)
  //     );
  // }
}
