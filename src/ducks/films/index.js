import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';


const {
    searchRequest: getFilmsRequest,
    showRequest: getFilmRequest,
    getDataSuccess: getFilmsSuccess,
    getDataFailure: getFilmsFailure,
    showSuccess: getFilmSuccess
} = createActions({
  SEARCH_REQUEST: null,
  SHOW_REQUEST: null,
  GET_DATA_SUCCESS: null,
  GET_DATA_FAILURE: null,
  SHOW_SUCCESS: null
})


const elements = handleActions(
  {
    [getFilmsSuccess]: (state, action) => action.payload,
  },
  [],
);



const isLoading = handleActions(
  {
    [getFilmsRequest]: () => true,
    [getFilmRequest]: () => true,
    [getFilmsFailure]: () => false,
    [getFilmsSuccess]: () => false,
    [getFilmSuccess]: () => false
  },
  false,
);


const error = handleActions(
  {
    [getFilmsRequest]: () => null,
    [getFilmRequest]: () => null,
    [getFilmsFailure]: (state, action) => action.payload,
  },
  null,
);


const entities = handleActions(
  {
    [getFilmSuccess]: (state, action) => action.payload,
  },
  {}
)


const getIsLoading = state => state.films.isLoading;
const getError = state => state.films.error;
const getFilms = state => state.films.elements;
const getFilm = state => state.films.entities;

export default combineReducers({
  elements,
  isLoading,
  error,
  entities
});

export {
  getFilmsRequest,
  getFilmRequest,
  getFilmsSuccess,
  getFilmSuccess,
  getFilmsFailure,
  getIsLoading,
  getError,
  getFilms,
  getFilm
};