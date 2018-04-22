import { createActions } from 'redux-actions';

const {
  searchRequest: getSeriesRequest,
  searchSuccess: getSeriesSuccess,
  searchFailure: getSeriesFailure
} = createActions({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: series => series,
  SEARCH_FAILURE: null
});

export { getSeriesRequest, getSeriesSuccess, getSeriesFailure };
