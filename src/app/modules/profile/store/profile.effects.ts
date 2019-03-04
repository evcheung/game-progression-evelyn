import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProfileActions from './profile.actions';
import { DataService } from '../../../../app/modules/profile/services/profile-data.service';
import { switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../../../app/modules/profile/store/profile.reducer';
import { getProfileDataState } from '../../../../app/modules/profile/store/profile.selectors';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private router: Router, private dataService: DataService, private store: Store<ProfileState>) {}

  // profileData: {} = this.store.select(getProfileDataState).subscribe(val => this.profileData = val);
  // why doesn't it work if put on separate line from profileData (initialize variable first)?
  // TODO: this isn't using the GetProfile Action, does it need to be refactored?



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

  // @Effect()
  // updateProfile$ = this.actions$
  //   .pipe(
  //     ofType(ProfileActions.ActionTypes.UPDATE_PROFILE),
  //     switchMap(() => this.dataService.updateProfile(this.profileData)
  //       .pipe(
  //         map((data: any) => {
  //           console.log(this.profileData)
  //           return new ProfileActions.UpdateProfileSuccess(data);
  //         }
  //         ),
  //         // map(() => this.router.navigate(['/my-profile'])),
  //         catchError(error => of(new ProfileActions.UpdateProfileFail()))
  //       ))
  //   );

  // TODO: Why does using a state selector and passing it into dataService.updateProfile work?

  //

  @Effect()
    updateProfile$ = this.actions$
    .pipe(
      ofType(ProfileActions.ActionTypes.UPDATE_PROFILE),
      map((action: any) => action.payload),
      switchMap((form) => this.dataService.updateProfile(form)
        .pipe(
          map((data: any) => new ProfileActions.UpdateProfileSuccess(data)),
          // map(() => this.router.navigate(['/my-profile'])),
          catchError(error => of(new ProfileActions.UpdateProfileFail()))
        ))
    );
}


// TODO: UpdateProfileSuccess not dispatching before router.navigate, move it elsewhere (like component)
// TODO: flow of the data? After submitting the update, does the onInit call GetProfile again to update state?
