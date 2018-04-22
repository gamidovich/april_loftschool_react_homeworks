import { show } from '../api'
import { getFilmRequest, getFilmSuccess, getError  } from '../ducks/films'

const searchMiddleware = store => next => action => {
  if(action.type === getFilmRequest.toString()){

    
    show(action.payload)
      .then(item => store.dispatch(getFilmSuccess(item)))
      .catch(error => store.dispatch(getError(error)));
  }

  return next(action)
}

export default searchMiddleware