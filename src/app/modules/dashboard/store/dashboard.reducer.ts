import * as DashboardActions from './dashboard.actions';
export interface DashboardState {
  incompleteGames: {};
  gameStats: {
    timeRemaining: number;
    incompletePercentage: number;
    numberCompleted: number;
    completedPercentage: number;
  };
  loading: boolean;
  error: any;
}
export const initialState = {
  gameStats: {
    timeRemaining: 0,
    incompletePercentage: 0,
    numberCompleted: 0,
    completedPercentage: 0,
  },
  loading: false,
  error: null
};

export function dashboardReducer(
  state = initialState,
  action: DashboardActions.ActionsUnion
) {
  switch (action.type) {
    case DashboardActions.ActionTypes.GET_GAMES: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case DashboardActions.ActionTypes.GET_GAMES_SUCCESS: {
      return {
        ...state,
        gameStats: action.payload,
        loading: false
      };
    }

    case DashboardActions.ActionTypes.GET_GAMES_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Error loading games'
      };
    }

    default: {
      return state;
    }
  }
}
