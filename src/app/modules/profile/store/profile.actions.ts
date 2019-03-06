import { Action } from '@ngrx/store';
import { Response } from '../../interface/components/profile-data.interface';

export enum ActionTypes {
  GET_PROFILE = '[Profile] Get Profile',
  GET_PROFILE_SUCCESS = '[Profile] Get Profile Success',
  GET_PROFILE_FAIL = '[Profile] Get Profile Fail',
  UPDATE_PROFILE = '[Profile-Edit] Update Profile',
  UPDATE_PROFILE_SUCCESS = '[Profile-Edit] Update Profile Success',
  UPDATE_PROFILE_FAIL = '[Profile-Edit] Update Profile Fail'
  // TEST = 'Test',
}

export class GetProfile implements Action {
  readonly type = ActionTypes.GET_PROFILE;
  // constructor(public payload: Response) {}
}

export class GetProfileSuccess implements Action {
  readonly type = ActionTypes.GET_PROFILE_SUCCESS;
  constructor(public payload: Response) {}
}

export class GetProfileFail implements Action {
  readonly type = ActionTypes.GET_PROFILE_FAIL;
}

export class UpdateProfile implements Action {
  readonly type = ActionTypes.UPDATE_PROFILE;
  constructor(public payload: any) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = ActionTypes.UPDATE_PROFILE_SUCCESS;
  constructor(public payload: Response) {}
}

export class UpdateProfileFail implements Action {
  readonly type = ActionTypes.UPDATE_PROFILE_FAIL;
  // constructor(public payload: Response) {}
}

// export class Test implements Action {
//   readonly type = ActionTypes.TEST;
// }

export type ActionsUnion =
  | GetProfile
  | GetProfileSuccess
  | GetProfileFail
  | UpdateProfile
  | UpdateProfileSuccess
  | UpdateProfileFail;
