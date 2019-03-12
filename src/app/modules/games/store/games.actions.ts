import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_GAMES = '[Games] Get Games',
  GET_GAMES_SUCCESS = '[Games] Get Games Success',
  GET_GAMES_FAIL = '[Games] Get Games Fail',
  GET_PLATFORMS = '[Games] Get Platforms',
  GET_PLATFORMS_SUCCESS = '[Games] Get Platforms Success',
  GET_PLATFORMS_FAIL = '[Games] Get Platforms Fail'
}
export class GetGames implements Action {
  readonly type = ActionTypes.GET_GAMES;
}

export class GetGamesSuccess implements Action {
  readonly type = ActionTypes.GET_GAMES_SUCCESS;
  constructor(public payload: any) { }
}

export class GetGamesFail implements Action {
  readonly type = ActionTypes.GET_GAMES_FAIL;
}

export class GetPlatforms implements Action {
  readonly type = ActionTypes.GET_PLATFORMS;
}

export class GetPlatformsSuccess implements Action {
  readonly type = ActionTypes.GET_PLATFORMS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetPlatformsFail implements Action {
  readonly type = ActionTypes.GET_PLATFORMS_FAIL;
}

export type ActionsUnion =
GetGames |
GetGamesSuccess |
GetGamesFail |
GetPlatforms |
GetPlatformsSuccess |
GetPlatformsFail;
