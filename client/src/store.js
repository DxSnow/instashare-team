import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'; // breaking data into chunks
import rootReducer from './reducers';// will refer to index.js file

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
              rootReducer, // list of all reducers
              {},
              composeEnhancers(
                applyMiddleware(...middleware)
              ));


export default store;
