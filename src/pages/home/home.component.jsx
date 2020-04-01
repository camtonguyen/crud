import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import { fetchGames } from '../../redux/games/games.actions';

import GameList from '../../components/game-list/game-list.component';

const HomePage = ({ listGame, fetchGames }) => {
  useEffect(() => {
    fetchGames()
  }, [fetchGames])
  return (
    <div>Hompage
      <GameList games={listGame} />
    </div>
  );
};

const mapStateToProps = ({ games: { listGame } }) => ({
  listGame
});

const mapDispatchToProps = dispatch => ({
  fetchGames: games => dispatch(fetchGames(games))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
