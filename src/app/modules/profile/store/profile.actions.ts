import { Action } from '@ngrx/store';
import { Response } from '../../interface/components/profile/profile-data.interface';

export enum ActionTypes {
  GET_PROFILE = '[Profile] Get Profile',
  GET_PROFILE_SUCCESS = '[Profile] Get Profile Success',
  GET_PROFILE_FAIL = '[Profile] Get Profile Fail',
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


// export class Test implements Action {
//   readonly type = ActionTypes.TEST;
// }


export type ActionsUnion = GetProfile | GetProfileSuccess | GetProfileFail;
