import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from '../store/games.reducer';

export const selectGames = createFeatureSelector<GamesState>('games');
export const getGamesDataState = createSelector(selectGames, (state: GamesState) => {
  console.log('selector games data', state.data);
  return state.data;
});

export const getPlatformsDataState = createSelector(selectGames, (state: GamesState) => {
  console.log('selector games platforms', state.platforms);
  return state.platforms;
});
