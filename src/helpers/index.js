export const moveLastOrder = orders => fn => {
  const [order] = orders.reverse()
  fn(order)
}
