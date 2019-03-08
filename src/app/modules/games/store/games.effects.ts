import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as GamesActions from './games.actions';
import { DataService } from '../../../../app/modules/games/services/games-data.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GamesState } from '../../../../app/modules/games/store/games.reducer';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private router: Router, private dataService: DataService, private store: Store<any>) { }
  @Effect()
  loadGames$ = this.actions$
    .pipe(
      ofType(GamesActions.ActionTypes.GET_GAMES),
      switchMap(() => this.dataService.getGames()
        .pipe(
          map((data: any) => {
            console.log('[games] GET success', data);
            return new GamesActions.GetGamesSuccess(data);
          }),
          catchError(error => of(new GamesActions.GetGamesFail()))
        ))
    );
};
