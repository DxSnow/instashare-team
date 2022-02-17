import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'; // breaking data into chunks
import rootReducer from './reducers';// will refer to index.js file

const middleware = [thunk];
const initialState = {}

// !! the following code is disabled because if a browser does not have redux_devtools installed it will show blank page.
// const store = createStore(
//               rootReducer, // list of all reducers
//               {},
//               compose(
//                 applyMiddleware(...middleware),
//                  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//               ));

//  to solve above problem, we can exclude redux_devtools when in production
const store
if(process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware)
  ));
} else {
  store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
}

export default store;
