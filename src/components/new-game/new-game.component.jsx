import React, { useState, Fragment } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { saveGame } from '../../redux/games/games.actions';

import { 
    FormContainer, 
    FormField, 
    FormLabel, 
    FormInput, 
    FormError,
    ImageContainer,
    Button
} from './new-game.styles';

const NewGame = ({ saveGame }) => {

    const [newGame, setNewGame] = useState({title: '', cover: '', done: false});
    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);

    const { title, cover, done } = newGame;

    const handleChange = e => {
        const { name, value } = e.target;
        if(!!errors[name]) {
            delete errors[name];
            setErrors({...errors})
        } else {
            setNewGame({...newGame, [name]: value})
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(title === '') errors.title = 'Title cannot be empty';
        if(cover === '') errors.cover = 'Cover cannot be empty';
        setErrors({...errors});

        const isValid = Object.keys(errors).length === 0;

        if(isValid) {
            // setLoading(true);
            saveGame({ title, cover }).then(
                () => {setNewGame({done: true})},
                error => error.response.json().then(({errors}) => setErrors({...errors}))
            );
        }
    }

    return (
        <Fragment>
            <h1>Add new game</h1>
            {
                errors.global && <FormError>{errors.global}</FormError>
            }
            {
                done ? <Redirect to='/games' /> :
                (<FormContainer onSubmit={handleSubmit}>
                    <FormField className={classnames('', { error: !!errors.title })}>
                        <FormLabel>Title</FormLabel>
                        <FormInput name='title' 
                            value={title} 
                            type='text' 
                            onChange={handleChange}
                        />
                        <FormError>{errors.title}</FormError>
                    </FormField>
                    <FormField className={classnames('', { error: !!errors.cover })}>
                        <FormLabel>Cover Url</FormLabel>
                        <FormInput name='cover' 
                            value={cover} 
                            type='text' 
                            onChange={handleChange}
                        />
                        <FormError>{errors.cover}</FormError>
                    </FormField>
                    <ImageContainer>
                        {
                            cover !== '' && <img src={cover} alt='cover' />
                        }
                    </ImageContainer>
                    <FormField>
                        <Button>Save</Button>
                    </FormField>
                </FormContainer>)
            }
        </Fragment>
    )
};

const mapStatetoProps = dispatch => ({
    saveGame: data => dispatch(saveGame(data))
})

export default connect(null, mapStatetoProps)(NewGame);
