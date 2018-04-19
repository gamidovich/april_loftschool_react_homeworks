import { search } from '../api'
import { getFilmsRequest, getError, getFilmsSuccess } from '../ducks/films'

const searchMiddleware = store => next => action => {


	if(action.type === getFilmsRequest().type.toString()){
		

	search(action.payload)
		.then(items => store.dispatch(getFilmsSuccess(items)))
		.catch(error => store.dispatch(getError(error)))
	}

  return next(action)
}

export default searchMiddleware