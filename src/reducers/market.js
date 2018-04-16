import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes'

const initState = {
  orders: []
}

const marketReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        orders: [...state.orders, action.payload]
      }
    case MOVE_ORDER_TO_FARM:
      return {
        orders: state.orders.filter(order => order.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default marketReducer;