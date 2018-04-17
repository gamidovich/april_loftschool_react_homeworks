export const sortOrderFn = (a, b) => b.createdAt - a.createdAt;

export const addOrderFn = (state, newOrder) => {
  const { orders } = state

  return {...state, orders: [...orders, newOrder].sort(sortOrderFn)}
}

export const removeOrderFn = (state, {id}) => {
  const { orders } = state

  return { ...state, orders: orders.filter(order => order.id !== id) }
}
