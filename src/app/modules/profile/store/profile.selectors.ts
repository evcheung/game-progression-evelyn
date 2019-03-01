import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../store/profile.reducer';

export const selectProfile = createFeatureSelector<any>('profile');
// const profileSelector = createSelector(selectProfile, (state) => state.profile);
export const getProfileState = createSelector(selectProfile, (state) => {
  console.log('!!! selector', state);
  return state.data;
});
