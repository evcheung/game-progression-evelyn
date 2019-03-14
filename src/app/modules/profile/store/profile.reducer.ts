import * as ProfileActions from './profile.actions';
import { ProfileResponse } from '../../../interface/profile-data.interface';
export interface ProfileState {
  data: ProfileResponse;
  loading: boolean;
  error: any;
}
export const initialState = {
  data: {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
    averageNumberOfHoursPerDay: 0,
    languageId: 0
  },
  loading: false,
  error: null,
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
        error: 'Error loading profile'
      };
    }

    case ProfileActions.ActionTypes.UPDATE_PROFILE: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case ProfileActions.ActionTypes.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case ProfileActions.ActionTypes.UPDATE_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Error updating profile'
      };
    }

    default: {
      return state;
    }
  }
}
