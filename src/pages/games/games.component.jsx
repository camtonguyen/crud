import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchGames } from '../../redux/games/games.actions';

import GameList from '../../components/game-list/game-list.component';

const GamesPage = ({ listGame, fetchGames }) => {

  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  return (
    <Fragment>
        <h1>List game</h1>
        <GameList games={listGame} />
    </Fragment>
  );
};

const mapStateToProps = ({ games: { listGame } }) => ({
  listGame
});

const mapDispatchToProps = dispatch => ({
  fetchGames: games => dispatch(fetchGames(games))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);