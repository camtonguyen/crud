import GamesTypes from './games.types';

const INITIAL_STATE = {
    listGame: []
};

const gamesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GamesTypes.SET_GAMES:
            return {
                ...state,
                listGame: action.payload
            }
        default:
            return state
    }
}

export default gamesReducer;