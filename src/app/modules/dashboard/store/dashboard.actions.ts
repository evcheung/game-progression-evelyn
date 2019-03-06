import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_GAMES = '[Dashboard] Get Games',
  GET_GAMES_SUCCESS = '[Dashboard] Get Games Success',
  GET_GAMES_FAIL = '[Dashboard] Get Games Fail'
}
export class GetGames implements Action {
  readonly type = ActionTypes.GET_GAMES;
}

export class GetGamesSuccess implements Action {
  readonly type = ActionTypes.GET_GAMES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetGamesFail implements Action {
  readonly type = ActionTypes.GET_GAMES_FAIL;
}

export type ActionsUnion = GetGames | GetGamesSuccess | GetGamesFail;
