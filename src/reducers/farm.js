import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes'
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes'

const initState = {
  orders: []
}

const farmReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(el => el.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default farmReducer;
