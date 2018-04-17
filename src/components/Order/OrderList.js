import React from 'react';
import Order from './Order';

export default ({ orders = [] }) => (
  <div className="orders-list">
    {orders.map(order => {
      const { id, name, price, createdAt } = order;
      return <Order {...{ name, price, createdAt }} key={id} />;
    })}
  </div>
);
