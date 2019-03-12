// import { getProfileDataState } from '../../profile/store/profile.selectors';
// import { Store } from '@ngrx/store';

// let avgHours;
// this.store.select(getProfileDataState).subscribe(val => avgHours = val);


export const gamesTransform = (games, platforms, avgHours) => {
  return games.map(game => {
    const platformFiltered = platforms.filter(platform => {
      return platform.id === game.platformId;
    });

    const percentCompleted = ((game.numberOfHoursPlayed / game.numberOfHoursToComplete) * 100).toFixed(1);

    const date = new Date();
    const daysNeeded = game.numberOfHoursToComplete / avgHours;
    const completionDate = new Date(date.setDate(date.getDate() + daysNeeded)).toLocaleDateString('en-US');

    return {
      ...game,
      platform: platformFiltered[0].name,
      completionDate,
      percentCompleted,
    };
  });
};
