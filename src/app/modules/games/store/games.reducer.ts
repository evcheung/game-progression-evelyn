import * as GamesActions from './games.actions';
import { PlatformsResponse } from '../../../interface/platform-data.interface';

export interface GamesState {
  data: []; // typing with ModifiedGamesResponse is causing errors in games.component
  platforms: PlatformsResponse;
  loading: boolean;
  error: any;
}
export const initialState = {
  data: [{
    completionDate: '',
    dateCreated: '',
    id: 0,
    image: '',
    isComplete: false,
    name: '',
    numberOfHoursPlayed: 0,
    numberOfHoursToComplete: 0,
    percentCompleted: '',
    platform: '',
    platformId: 0,
    priority: 0,
  }],
  platforms: [],
  loading: false,
  error: null
};

export function gamesReducer(
  state = initialState,
  action: GamesActions.ActionsUnion
) {
  switch (action.type) {
    case GamesActions.ActionTypes.GET_GAMES: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case GamesActions.ActionTypes.GET_GAMES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case GamesActions.ActionTypes.GET_GAMES_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Error loading games'
      };
    }

    case GamesActions.ActionTypes.UPDATE_GAME: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case GamesActions.ActionTypes.UPDATE_GAME_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case GamesActions.ActionTypes.UPDATE_GAME_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Error updating game'
      };
    }

    case GamesActions.ActionTypes.GET_PLATFORMS: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case GamesActions.ActionTypes.GET_PLATFORMS_SUCCESS: {
      return {
        ...state,
        platforms: action.payload,
        loading: false
      };
    }

    case GamesActions.ActionTypes.GET_PLATFORMS_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Error loading platforms'
      };
    }

    default: {
      return state;
    }
  }
}
