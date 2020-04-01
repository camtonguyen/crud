import React, { useState, Fragment } from 'react';
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

const NewGame = () => {

    const [newGame, setNewGame] = useState({title: '', cover: ''});
    const [errors, setErrors] = useState({})
    const { title, cover } = newGame;

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
        setErrors({...errors})
    }

    return (
        <Fragment>
            <h1>Add new game</h1>
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
}

export default NewGame;
