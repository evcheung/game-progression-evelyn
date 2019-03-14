import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProfileActions from './profile.actions';
import { DataService } from '../../../../app/modules/profile/services/profile-data.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../../../app/modules/profile/store/profile.reducer';
import { ProfileResponse } from '../../../interface/profile-data.interface';
@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private router: Router, private dataService: DataService, private store: Store<ProfileState>) {}

  @Effect()
  loadProfile$ = this.actions$
    .pipe(
      ofType(ProfileActions.ActionTypes.GET_PROFILE),
      switchMap(() => this.dataService.getProfile()
        .pipe(
          map((data: ProfileResponse) => new ProfileActions.GetProfileSuccess(data)),
          catchError(error => of(new ProfileActions.GetProfileFail()))
        ))
    );


  @Effect()
    updateProfile$ = this.actions$
    .pipe(
      ofType(ProfileActions.ActionTypes.UPDATE_PROFILE),
      map((action: any) => action.payload),
      switchMap((form) => this.dataService.updateProfile(form)
        .pipe(
          map((data: ProfileResponse) => {
            this.router.navigate(['/my-profile']);
            return new ProfileActions.UpdateProfileSuccess(data);
          }),
          catchError(error => of(new ProfileActions.UpdateProfileFail()))
        ))
    );
}
