import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as DashboardActions from './dashboard.actions';
import { DataService } from '../../../../app/modules/dashboard/services/dashboard-data.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardState } from '../../../../app/modules/dashboard/store/dashboard.reducer';
import { getProfileDataState } from '../../../../app/modules/profile/store/profile.selectors';
import { dashboardTransform } from '../services/dashboard.transformations';
import { GamesResponse } from '../../../interface/games-data.interface';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<DashboardState>
  ) {}

  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(DashboardActions.ActionTypes.GET_GAMES),
    switchMap(() =>
      this.dataService.getGames().pipe(
        map((data: GamesResponse) => {
          // console.log('[dashboard] GET success', data);

          let profileState;
          this.store.select(getProfileDataState).subscribe(val => {
            profileState = val;
          });

          const gamesStats = dashboardTransform(data, profileState);

          return new DashboardActions.GetGamesSuccess(gamesStats);
        }),
        catchError(error => of(new DashboardActions.GetGamesFail()))
      )
    )
  );
}
