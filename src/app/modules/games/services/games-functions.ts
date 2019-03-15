import { GamesResponse } from '../../../interface/games-data.interface';
import { PlatformsResponse } from '../../../interface/platform-data.interface';

export const checkGames = (games: [], initialState) => {
  return games === initialState.data || games.length === 0 ? true : false;
}

export const getGame = (games: [], id: number) => {
    return games.filter((x: GamesResponse) => x.id === id)[0];
};

export const modifyGame = (gameForm, selectedGame, platforms) => {
    const allGameValues = {
      ...selectedGame,
      ...gameForm.value,
      platformId: platforms.filter((x: PlatformsResponse) => x.name === gameForm.value.platform)[0].id
      // ASK: should I be typing these?
    };

    // Destructuring to remove unwanted values for PUT request

    const {
      platform,
      percentCompleted,
      completionDate,
      ...newGameObject } = allGameValues;

    // console.log('form values', newGameObject);

    return newGameObject;

}
