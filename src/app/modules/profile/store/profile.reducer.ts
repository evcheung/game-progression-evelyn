import * as ProfileActions from './profile.actions';
import { Response } from '../../interface/components/profile/profile-data.interface';
import { createFeatureSelector } from '@ngrx/store';
// export interface AppState {
//   id: number;
//   firstName: string;
//   lastName: string;
//   image: string;
//   languageId: number;
//   averageNumberOfHoursPerDay: number;
//   // test: number;
// }

export const initialState = {
  data: {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
    averageNumberOfHoursPerDay: 0,
    languageId: 0,
  },
  loading: false,
  error: null,
  // test: 0,
};

export function profileReducer(
  state = initialState,
  action: ProfileActions.ActionsUnion
) {
  switch (action.type) {
    case ProfileActions.ActionTypes.GET_PROFILE: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case ProfileActions.ActionTypes.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case ProfileActions.ActionTypes.GET_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Error'
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

// export const selectorFullName = (state: Response) => `${state.firstName} ${state.lastName}`;
export const getProfileState = createFeatureSelector<Response>('data');
