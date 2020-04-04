import React from 'react';

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

const GameItem = ({ game }) => (
    <ItemContainer>
        <ItemImage>
            <img src={game.cover} alt={game.title} />
        </ItemImage>
        <ItemContent>
            <ItemHeader>{game.title}</ItemHeader>
            <ItemExtraContent>
                <GroupButton>
                    <GreenButton to={`/game/${game._id}`}>Edit</GreenButton>
                    <RedButton to=''>Remove</RedButton>
                </GroupButton>
            </ItemExtraContent>
        </ItemContent>
    </ItemContainer>
);

export default GameItem;