import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import Header from './components/header/header.component';
import NewGame from './components/new-game/new-game.component';

import { AppContainer } from './App.styles';

const App = () => {
  return (
    <AppContainer>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/games/new' component={NewGame} />
        </Switch>
    </AppContainer>
  );
}

export default App;
