import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initState = {
  ordersFarm: [],
};

const farmReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ordersFarm: [...state.ordersFarm, action.payload],
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        ordersFarm: state.ordersFarm.filter(el => el.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default farmReducer;
