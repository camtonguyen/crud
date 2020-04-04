import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { saveGame, fetchGame, updateGame } from '../../redux/games/games.actions';

import NewGame from '../../components/new-game/new-game.component';



const GameFormPage = ({ saveGame, fetchGame, updateGame, game, match }) => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(match.params._id) {
            fetchGame(match.params._id)
        }
    }, [fetchGame, match.params._id])
    
    const saveGameChecking = ({ _id, title, cover }) => {
        if(_id) {
            return updateGame({ _id, title, cover }).then(
                () => setRedirect({ redirect: true })
            )
        } else {
            return saveGame({ title, cover }).then(
                () => setRedirect({ redirect: true })
            )
        }
    }

    const pageTitle = match.params._id ? 'Edit Game' : 'Add New Game';

    return (
        <Fragment>
            <h1>{pageTitle}</h1>
            {
                redirect 
                    ? <Redirect to='/games' /> 
                    : <NewGame 
                        game={game}
                        saveGame={saveGameChecking}
                      />
            }
        </Fragment>
    )
};

const mapStateToProps = ({ games: { listGame }}, ownProps) => {
    if(ownProps.match.params._id) {
        return {
            game: listGame.find(item => item._id === ownProps.match.params._id)
        }
    }
    return { game: null }
};

const mapDispatchtoProps = dispatch => ({
    saveGame: data => dispatch(saveGame(data)),
    fetchGame: id => dispatch(fetchGame(id)),
    updateGame: game => dispatch(updateGame(game))
});

export default connect(
    mapStateToProps, 
    mapDispatchtoProps
)(GameFormPage);