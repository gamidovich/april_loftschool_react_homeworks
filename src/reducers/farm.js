import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import { addOrderFn, removeOrderFn } from './helpers';

export default (state = { orders: [] }, action) => {
  const { payload, type } = action

  switch (type) {
    case MOVE_ORDER_TO_FARM:
      return addOrderFn(state, payload);
    case MOVE_ORDER_TO_CUSTOMER:
      return removeOrderFn(state, payload);
    default:
      return state
  }
}
