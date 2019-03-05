// import * as DashboardActions from './profile.actions';
// import { Response } from '../../interface/components/profile/profile-data.interface';
export interface DashboardState {
  incompleteGames: {
    // id: number,
    // dateCreated: string,
    name: string;
    // image: string,
    // platformId: number,
    // priority: number,
    numberOfHoursPlayed: number;
    numberOfHoursToComplete: number;
    isComplete: boolean;
  };
  loading: boolean;
  error: any;
  // test: number;
}
export const initialState = {
  incompleteGames: {
    name: '',
    numberOfHoursPlayed: 0,
    numberOfHoursToComplete: 0,
    isComplete: false
  },
  loading: false,
  error: null
};

export function dashboardReducer(
  state = initialState,
  action: DashboardActions.ActionsUnion
) {
  switch (action.type) {
    // case DashboardActions.ActionTypes.GET_PROFILE: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null
    //   };
    // }

    // case DashboardActions.ActionTypes.GET_PROFILE_SUCCESS: {
    //   return {
    //     ...state,
    //     data: action.payload,
    //     loading: false
    //   };
    // }

    // case DashboardActions.ActionTypes.GET_PROFILE_FAIL: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: 'Error loading profile'
    //   };
    // }

    default: {
      return state;
    }
  }
}
