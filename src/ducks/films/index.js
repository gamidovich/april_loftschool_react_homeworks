import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';
// import { createSelector } from 'reselect';


const {
	films: { 
		getDataRequest: getFilmsRequest,
    getDataSuccess: getFilmsSuccess,
    getDataFailure: getFilmsFailure,
}} = createActions({
	FILMS:{
		GET_DATA_REQUEST: null,
    GET_DATA_SUCCESS: null,
    GET_DATA_FAILURE: null
	}	
})


const elements = handleActions(
  {
    [getFilmsSuccess]: (state, action) => state.concat(action.payload),
  },
  [],
);



const isLoading = handleActions(
  {
    [getFilmsRequest]: () => true,
    [getFilmsFailure]: () => false,
    [getFilmsSuccess]: () => false,
  },
  false,
);


const error = handleActions(
  {
    [getFilmsRequest]: () => null,
    [getFilmsFailure]: (state, action) => action.payload,
  },
  null,
);



const getIsLoading = state => state.films.isLoading;
const getError = state => state.films.error;
const getFilms = state => state.films.elements;

export default combineReducers({
  elements,
  isLoading,
  error,
});

export {
  getFilmsRequest,
  getFilmsSuccess,
  getFilmsFailure,
  getIsLoading,
  getError,
  getFilms,
};