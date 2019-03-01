import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProfileActions from './profile.actions';
import { DataService } from '../../../../app/modules/profile/services/profile-data.service';
import { switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  @Effect()
  loadProfile$ = this.actions$
    .pipe(
      ofType(ProfileActions.ActionTypes.GET_PROFILE),
      switchMap(() => this.dataService.getProfile()
        .pipe(
          map((data: any) => new ProfileActions.GetProfileSuccess(data)),
          catchError(error => of(new ProfileActions.GetProfileFail()))
          // TODO: find out why error action not dispatching
        ))
    );

}
