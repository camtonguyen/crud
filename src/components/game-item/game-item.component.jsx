import React from 'react';
import { connect } from 'react-redux';
import { deleteGame } from '../../redux/games/games.actions';

import { 
    ItemContainer, 
    ItemImage, 
    ItemContent, 
    ItemHeader,
    ItemExtraContent,
    GroupButton,
    GreenButton,
    RedButton 
} from './game-item.styles';

const GameItem = ({ game, deleteGame }) => (
    <ItemContainer>
        <ItemImage>
            <img src={game.cover} alt={game.title} />
        </ItemImage>
        <ItemContent>
            <ItemHeader>{game.title}</ItemHeader>
            <ItemExtraContent>
                <GroupButton>
                    <GreenButton to={`/game/${game._id}`}>Edit</GreenButton>
                    <RedButton to='#' onClick={() => deleteGame(game._id)}>Remove</RedButton>
                </GroupButton>
            </ItemExtraContent>
        </ItemContent>
    </ItemContainer>
);

const mapDispatchToProps = dispatch => ({
    deleteGame: gameId => dispatch(deleteGame(gameId))
})

export default connect(null, mapDispatchToProps)(GameItem);