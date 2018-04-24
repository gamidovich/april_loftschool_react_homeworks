import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { getShowRequest, getShowSuccess, getShowFailure } from '../actions/show';

const entity = handleActions(
  {
    [getShowSuccess]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [getShowRequest]: () => true,
    [getShowSuccess]: () => false,
    [getShowFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getShowRequest]: () => null,
    [getShowFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  entity,
  isLoading,
  error
});
