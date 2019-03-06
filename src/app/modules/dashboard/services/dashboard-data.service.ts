import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../interface/components/profile-data.interface';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Response>(environment.apiUrl + '/games').pipe(
      map(response => response),
      catchError(err => err)
    );
  }

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
