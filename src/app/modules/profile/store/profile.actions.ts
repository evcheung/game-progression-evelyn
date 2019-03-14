import { Action } from '@ngrx/store';
import { ProfileResponse } from '../../../interface/profile-data.interface';

export enum ActionTypes {
  GET_PROFILE = '[Profile] Get Profile',
  GET_PROFILE_SUCCESS = '[Profile] Get Profile Success',
  GET_PROFILE_FAIL = '[Profile] Get Profile Fail',
  UPDATE_PROFILE = '[Profile-Edit] Update Profile',
  UPDATE_PROFILE_SUCCESS = '[Profile-Edit] Update Profile Success',
  UPDATE_PROFILE_FAIL = '[Profile-Edit] Update Profile Fail'
}

export class GetProfile implements Action {
  readonly type = ActionTypes.GET_PROFILE;
}

export class GetProfileSuccess implements Action {
  readonly type = ActionTypes.GET_PROFILE_SUCCESS;
  constructor(public payload: ProfileResponse) {}
}

export class GetProfileFail implements Action {
  readonly type = ActionTypes.GET_PROFILE_FAIL;
}

export class UpdateProfile implements Action {
  readonly type = ActionTypes.UPDATE_PROFILE;
  constructor(public payload: ProfileResponse) { }
}

export class UpdateProfileSuccess implements Action {
  readonly type = ActionTypes.UPDATE_PROFILE_SUCCESS;
  constructor(public payload: ProfileResponse) {}
}

export class UpdateProfileFail implements Action {
  readonly type = ActionTypes.UPDATE_PROFILE_FAIL;
}

export type ActionsUnion =
  | GetProfile
  | GetProfileSuccess
  | GetProfileFail
  | UpdateProfile
  | UpdateProfileSuccess
  | UpdateProfileFail;
