import GamesTypes from './games.types';

export const setGames = games => ({
    type: GamesTypes.SET_GAMES,
    payload: games
});

export const fetchGames = () => {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)))
    }
} 