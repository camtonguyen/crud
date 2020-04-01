import React from 'react';
import { HeaderContainer, NavItem } from './header.styles';

const Header = () => (
    <HeaderContainer>
          <NavItem activeClassName="active" exact to="/">Home</NavItem>
          <NavItem activeClassName="active" exact to="/games">Games</NavItem>
          <NavItem activeClassName="active" exact to="/games/new">Add New Game</NavItem>
    </HeaderContainer>
);

export default Header;