import * as ProfileActions from './profile.actions';
import { Response } from '../../interface/components/profile/profile-data.interface';

export interface AppState {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
  // test: number;
}

// TODO: is there a way to apply Response to a group of items?

export const initialState = {
  id: 0,
  firstName: '',
  lastName: '',
  image: '',
  averageNumberOfHoursPerDay: 0,
  languageId: 0,
  // test: 0,
};

export function profileReducer(
  state = initialState,
  action: ProfileActions.ActionsUnion
): AppState {
  switch (action.type) {
    case ProfileActions.ActionTypes.GET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }

    // case ProfileActions.ActionTypes.TEST: {
    //   return {
    //     ...state,
    //     test: state.test + 1,
    //   };
    // }

    default: {
      return state;
    }
  }
}
