import { initialState } from './profile.reducer';
import { Action } from '@ngrx/store';
import { AppState } from '../store/profile.reducer';
import { Response } from '../../interface/components/profile/profile-data.interface';

export enum ActionTypes {
  GET_PROFILE = '[Profile] Get Profile',
  // TEST = 'Test',
}

export class GetProfile implements Action {
  readonly type = ActionTypes.GET_PROFILE;
  constructor(public payload: Response) {}
}

// export class Test implements Action {
//   readonly type = ActionTypes.TEST;
// }


export type ActionsUnion = GetProfile | Test;
