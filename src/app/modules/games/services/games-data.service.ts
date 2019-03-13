import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { GamesResponse } from '../../interface/dashboard-data.interface';


// TODO: archiectural question
// Ok that this is sharing the response inteface with dashboard? And is the exact same service?

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<GamesResponse>(environment.apiUrl + '/games').pipe(
      map(response => response)
    );
  }

  updateGame(game: {}, id: number) {
    return this.http.put<any>(environment.apiUrl + '/games/' + id, game).pipe(
      map(response => response)
    );
  }

  getPlatforms() {
    return this.http.get<any>(environment.apiUrl + '/platforms').pipe(
      map(response => response)
    );
  }
}
