import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from '../store/profile.reducer';

export const selectProfile = createFeatureSelector<ProfileState>('profile');
export const getProfileDataState = createSelector(selectProfile, (state: ProfileState) => {
  console.log('selector profile data', state.data);
  return state.data;
});
