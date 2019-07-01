import  {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import mainReducer from './reducers/reducers';

export const getStore = (initialState) => {
    const logger = createLogger();
    const middlewares = [logger, thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const composedEnhancer = compose(middlewareEnhancer);

    return createStore(mainReducer, initialState, composedEnhancer);
};