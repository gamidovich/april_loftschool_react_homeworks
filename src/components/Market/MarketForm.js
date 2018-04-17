import React from 'react';
import OrderList from '../Order/OrderList';

export default ({ handleCreate = f => f, handleMove = f => f, orders = [] }) => (
  <div className="market">
    <h2>Новые заказы в магазине</h2>
    <button className="new-orders__create-form" onClick={handleCreate}>
      Создать заказ
    </button>
    <button disabled={orders.length === 0} onClick={handleMove}>
      Отправить заказ на ферму
    </button>
    <OrderList orders={orders} />
  </div>
);
