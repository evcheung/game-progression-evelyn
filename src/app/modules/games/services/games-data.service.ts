import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { GamesResponse } from '../../interface/dashboard-data.interface';
import { throwError } from 'rxjs';


// TODO: archiectural question
// Ok that this is sharing the response inteface with dashboard? And is the exact same service?

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GamesResponse>(environment.apiUrl + '/games').pipe(
      map(response => response),
      catchError(err => throwError(err))
    );
  }
}
