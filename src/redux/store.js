import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const thunkMiddeware = [thunk];

if(process.env.NODE_ENV === 'development') {
    thunkMiddeware.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...thunkMiddeware)));
