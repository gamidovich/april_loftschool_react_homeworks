import { createActions } from 'redux-actions';

const {
  showRequest: getShowRequest,
  showSuccess: getShowSuccess,
  showFailure: getShowFailure
} = createActions({
  SHOW_REQUEST: null,
  SHOW_SUCCESS: show => show,
  SHOW_FAILURE: null
});

export { getShowRequest, getShowSuccess, getShowFailure };
