import React from 'react';
import './Order.css';
import { humanDate } from './helpers';

const Order = ({ name, price, createdAt }) => (
  <div className="order">
    <div className="order__uper">
      <p className="p--order">Название: {name}</p>
      <p className="p--order">
        Цена: <span className="order-price">{price}</span>
      </p>
    </div>
    <div className="order__lower">
      <p className="p--order">Создан: {humanDate(createdAt)}</p>
    </div>
  </div>
);

export default Order;
