import React from 'react';
import OrderList from '../Order/OrderList';

export default ({ handleMove = f => f, orders = [] }) => (
  <div className="farm">
    <h2>Производство на ферме</h2>
    <button onClick={handleMove} disabled={orders.length === 0}>
      Отправить урожай клиенту
    </button>
    <OrderList orders={orders} />
  </div>
);
