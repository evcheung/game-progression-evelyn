import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_GAMES = '[Games] Get Games',
  GET_GAMES_SUCCESS = '[Games] Get Games Success',
  GET_GAMES_FAIL = '[Games] Get Games Fail',
  UPDATE_GAME = '[Games] Update Game',
  UPDATE_GAME_SUCCESS = '[Games] Update Game Success',
  UPDATE_GAME_FAIL = '[Games] Update Game Fail',
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

export class UpdateGame implements Action {
  readonly type = ActionTypes.UPDATE_GAME;
  constructor(public payload: any) { }s
}

export class UpdateGameSuccess implements Action {
  readonly type = ActionTypes.UPDATE_GAME_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateGameFail implements Action {
  readonly type = ActionTypes.UPDATE_GAME_FAIL;
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
UpdateGame |
UpdateGameSuccess |
UpdateGameFail |
GetPlatforms |
GetPlatformsSuccess |
GetPlatformsFail;
