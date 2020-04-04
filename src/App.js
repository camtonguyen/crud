import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import GamesPage from './pages/games/games.component';
import GameFormPage from './pages/game-form/game-form.component'; 
import Header from './components/header/header.component';

import { AppContainer } from './App.styles';

const App = () => {
  return (
    <AppContainer>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/games' exact component={GamesPage} />
          <Route path='/games/new' exact component={GameFormPage} />
          <Route path='/game/:_id' exact component={GameFormPage} />
        </Switch>
    </AppContainer>
  );
}

export default App;
