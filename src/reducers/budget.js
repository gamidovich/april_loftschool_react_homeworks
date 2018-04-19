import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from 'actions/marketTypes';

export default (
  state = { deliveryExpanse: 0, profit: 0, farmExpanse: 0, customerExpance: 0 },
  action,
) => {
  const { type } = action;

  switch (type) {
    case MOVE_ORDER_TO_CUSTOMER:
      const { deliveryExpanse } = state;
      return { ...state, deliveryExpanse: deliveryExpanse + 20 };
    case CREATE_ORDER:
      const { profit, customerExpance } = state;
      const { price } = action.payload;
      return { ...state, profit: profit + price, customerExpance: customerExpance + 20 };
    case MOVE_ORDER_TO_FARM:
      const { farmExpanse } = state;
      return { ...state, farmExpanse: farmExpanse + 100 };
    default:
      return state;
  }
};
