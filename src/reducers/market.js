import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { addOrderFn, removeOrderFn } from './helpers'

export default (state = { orders: [] }, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_ORDER:
      return addOrderFn(state, payload)
    case MOVE_ORDER_TO_FARM:
      return removeOrderFn(state, payload)
    default:
      return state
  }
}
