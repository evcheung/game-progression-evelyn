import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../store/dashboard.reducer';

export const selectDashboard = createFeatureSelector<DashboardState>(
  'dashboard'
);
export const getDashboardGamesStatsState = createSelector(
  selectDashboard,
  (state: DashboardState) => {
    // console.log('selector dashboard game stats', state.gameStats);
    return state.gameStats;
  }
);
