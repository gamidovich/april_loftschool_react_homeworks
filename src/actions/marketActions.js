import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = (payload) => ({
	type: CREATE_ORDER,
	payload: payload
});

export const moveOrderToFarm = (payload) => ({
	type: MOVE_ORDER_TO_FARM,
	payload: payload
});
