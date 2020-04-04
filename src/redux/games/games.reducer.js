import GamesTypes from './games.types';
import { findGame, updateExistingGame } from './games.utils';

const INITIAL_STATE = {
    listGame: [],
    game: {}
};

const gamesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GamesTypes.SET_GAMES:
            return {
                ...state,
                listGame: action.payload
            }
        case GamesTypes.ADD_GAME:
            return {
                ...state,
                game: action.payload
            }
        case GamesTypes.GAME_FETCHED:
            return {
                ...state,
                game: findGame(state.listGame, action.payload)
            }
        case GamesTypes.GAME_UPDATED:
            return {
                ...state,
                game: updateExistingGame(state.listGame, action.payload)
            }
            
        default:
            return state
    }
}

export default gamesReducer;