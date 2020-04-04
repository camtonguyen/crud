import GamesTypes from './games.types';

const handleResponse = response => {
    if (response.ok) {
      return response.json();
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

export const setGames = games => ({
    type: GamesTypes.SET_GAMES,
    payload: games
});

export const addGame = game => ({
  type: GamesTypes.ADD_GAME,
  payload: game
});

export const gameFetched = game => ({
  type: GamesTypes.GAME_FETCHED,
  payload: game
});

export const gameUpdated = game => ({
  type: GamesTypes.GAME_UPDATED,
  payload: game
});

export const saveGame = data => {
      return dispatch => {
        return fetch('/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(handleResponse)
            .then(data => dispatch(addGame(data.game)));
      }
    
};

export const updateGame = data => {
  return dispatch => {
    return fetch(`/api/games/${data._id}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(handleResponse)
        .then(data => dispatch(gameUpdated(data.game)));
  }

};

export const fetchGames = () => {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)))
    }
};

export const fetchGame = (id) => {
  return dispatch => {
      fetch(`/api/games/${id}`)
          .then(res => res.json())
          .then(data => dispatch(gameFetched(data.game)))
  }
};
