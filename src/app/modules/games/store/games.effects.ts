import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as GamesActions from './games.actions';
import { DataService } from '../../../../app/modules/games/services/games-data.service';
import { switchMap, mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GamesState } from '../../../../app/modules/games/store/games.reducer';
import { gamesTransform } from '../store/games.transformation';
import { getProfileDataState } from './../../profile/store/profile.selectors';
@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private router: Router, private dataService: DataService, private store: Store<any>) { }

  @Effect()
  loadGamesAndPlatforms$ = this.actions$
  .pipe(
    ofType(GamesActions.ActionTypes.GET_GAMES),
    withLatestFrom(this.store.select(getProfileDataState)),
    map(([action, profile]) => profile),
    switchMap((profile) => this.dataService.getGames()
      .pipe(
        mergeMap((gamesData: any) => {
          return this.dataService.getPlatforms()
            .pipe(
              map((platformsData: any) => {
                console.log('[games] GET platforms success', platformsData);
                const updatedGames = gamesTransform(gamesData, platformsData, profile.averageNumberOfHoursPerDay);
                console.log('updated Games', updatedGames);
                return new GamesActions.GetGamesSuccess(updatedGames);
              })
            );
        }),
        // TODO: error happens when only platformId is missing from games data (no error if anything else missing)
        // Could be a case where games data may be incomplete, but app should still render
        // Find a way to accomodate this case
        catchError(error => of(new GamesActions.GetGamesFail()))
      ))
    );

    @Effect()
    loadPlatforms = this.actions$
      .pipe(
        ofType(GamesActions.ActionTypes.GET_PLATFORMS),
        switchMap(() => this.dataService.getPlatforms()
          .pipe(
            map((data: Response) => new GamesActions.GetPlatformsSuccess(data)),
            catchError(error => of(new GamesActions.GetPlatformsFail()))
          ))
      );


    // TODO: type the data

}
