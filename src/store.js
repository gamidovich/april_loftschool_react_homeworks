import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ducks';
import showMiddleware from './middlewares/showMiddleware';
import searchMiddleware from './middlewares/searchMiddleware';
import { search } from './api'

import ducks from './ducks/films'

const testMiddle = store => next => action => {
  const films = search(12).then(token => token)

  films.then(function(result) {
    console.log(result)
  })

  return next(action)
}

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(testMiddle),
      //applyMiddleware(searchMiddleware, showMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );
