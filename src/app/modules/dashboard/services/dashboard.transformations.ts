export const dashboardTransform = (games, profile) => {
  ///////// calculating Time Remaining /////////
  const sum = games.reduce((total, next) => {
    return next.numberOfHoursToComplete + total;
  }, 0);
  // console.log(sum);

  const timeRemaining = (sum / profile.averageNumberOfHoursPerDay).toFixed(1);


  ///////// calculating Unfinished Games /////////
  const hoursPlayed = games.reduce((total, next) => {
    return next.numberOfHoursPlayed + total;
  }, 0);

  const hoursTotal = games.reduce((total, next) => {
    return (next.numberOfHoursToComplete + next.numberOfHoursPlayed) + total;
  }, 0);

  // console.log(hoursPlayed, hoursTotal);

  const incompletePercentage = ((1 - hoursPlayed / hoursTotal) * 100).toFixed(2);


  ///////// calculating Finished Games /////////
  const numberCompleted = games.filter(x => x.isComplete).length;
  const completedPercentage = ((numberCompleted / games.length) * 100).toFixed(2);

  // console.log(completedPercentage);

  return {
    timeRemaining,
    incompletePercentage,
    numberCompleted,
    completedPercentage
  };

};
