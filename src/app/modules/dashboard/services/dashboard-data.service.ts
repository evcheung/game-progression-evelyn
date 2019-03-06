import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { GamesResponse } from '../../interface/components/dashboard-data.interface';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<GamesResponse>(environment.apiUrl + '/games').pipe(
      map(response => response),
      catchError(err => err)
    );
  }
}
