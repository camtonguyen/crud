import React, { useState, useEffect, Fragment } from 'react';
import classnames from 'classnames';

import { 
    FormContainer, 
    FormField, 
    FormLabel, 
    FormInput, 
    FormError,
    ImageContainer,
    Button
} from './new-game.styles';

const NewGame = ({ saveGame, game }) => {

    const [newGame, setNewGame] = useState({
        _id: game ? game._id : null,
        title: game ? game.title : '', 
        cover: game ? game.cover : '', 
    });

    useEffect(() => {
        if(game === null || game === undefined) {
            setNewGame({_id: null, title: '', cover: ''})
        }
        console.log('Data received', game);
    }, [game])

    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);

    const { _id, title, cover } = newGame;

    const handleChange = e => {
        const { name, value } = e.target;
        if(!!errors[name]) {
            delete errors[name];
            setNewGame({...newGame, [name]: value})
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
            saveGame({ _id, title, cover }).catch(
                error => error.response.json().then(({ errors }) => setErrors({...errors}))
            )
        }
    }

    return (
        <Fragment>
            {
                errors.global && <FormError>{errors.global}</FormError>
            }
            <FormContainer onSubmit={handleSubmit}>
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
            </FormContainer>
            
        </Fragment>
    )
};


export default NewGame;
