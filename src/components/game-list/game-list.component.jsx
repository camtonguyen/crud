import React, { Fragment } from 'react';

import GameItem from '../../components/game-item/game-item.component';
import { ListContainer } from './game-list.styles';

const GameList = ({ games }) => {
    const emptyMessage = 'There is no game here!';
    const gameList = (
        <Fragment>
            {
                games.map(game => <GameItem key={game._id} game={game} />)
            }
        </Fragment>
    );
    return (
        <ListContainer>
            {
                games.length === 0 ? emptyMessage : gameList
            }
        </ListContainer>
    )
}

export default GameList;
