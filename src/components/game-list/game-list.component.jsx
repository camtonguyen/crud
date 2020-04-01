import React from 'react'

const GameList = ({ games }) => {
    const emptyMessage = 'There is no game here!';
    const gameList = 'We have a bunch of fun games.';
    return (
        <div>
            {
                games.length === 0 ? emptyMessage : gameList
            }
        </div>
    )
}

export default GameList;
