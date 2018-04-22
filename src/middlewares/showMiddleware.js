import { getShowRequest, getShowSuccess, getShowFailure } from '../actions/show';
import { show } from '../api';

const showMiddleware = store => next => action => {
  if (action.type === getShowRequest.toString()) {
    show(action.payload)
      .then(entity => {
        store.dispatch(getShowSuccess(entity));
      })
      .catch(error => {
        store.dispatch(getShowFailure(error));
      });
  }

  return next(action);
};

export default showMiddleware;
