import { createStore, applyMiddleware, compose  } from 'redux';
import mainReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'


export default createStore(
    mainReducer,
    compose (
        applyMiddleware(thunkMiddleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);