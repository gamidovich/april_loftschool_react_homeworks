import React, { Component } from 'react';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MarketForm from './MarketForm';
import { moveLastOrder } from 'helpers';
import './Market.css';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
  static defaultProps = {
    orders: [],
  };

  static propTypes = {
    orders: PropTypes.array.isRequired,
  };

  handleCreateOrder = () => {
    const { createOrder } = this.props;
    const newOrder = getNewOrder();

    createOrder(newOrder);
  };

  handleMoveOrder = () => {
    const { moveOrderToFarm, orders } = this.props;

    moveLastOrder(orders)(moveOrderToFarm);
  };

  render() {
    const { orders } = this.props;

    return (
      <MarketForm
        {...{ orders, handleCreate: this.handleCreateOrder, handleMove: this.handleMoveOrder }}
      />
    );
  }
}

const mapDispathToProps = {
  createOrder,
  moveOrderToFarm,
};

const mapStateToProps = ({ market }) => ({ ...market });

export default connect(mapStateToProps, mapDispathToProps)(Market);
