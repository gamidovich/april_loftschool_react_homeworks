import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from 'actions/marketTypes';
import { sortOrderFn } from './helpers';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload].sort(
          sortOrderFn,
        ),
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [
          ...state.orders.filter(
            item => item.id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};
