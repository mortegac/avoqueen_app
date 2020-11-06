import {
    createStore, 
    // combineReducers, 
    compose, 
    applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './rootReducer';


const middlewares = [ thunk]


process.env.NODE_ENV === 'development' && middlewares.push(logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => createStore( 
    rootReducer, 
    composeEnhancers( 
        applyMiddleware(...middlewares) 
    ) )

export default generateStore;
