import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from 'actions/farmActions';
import FarmForm from './FarmForm';
import { moveLastOrder } from 'helpers';
import './Farm.css';

export class Farm extends Component {
  static defaultProps = {
    orders: [],
  };

  static propTypes = {
    orders: PropTypes.array.isRequired,
  };

  handleMoveOrder = () => {
    const { moveOrderToCustomer, orders } = this.props;

    moveLastOrder(orders)(moveOrderToCustomer);
  };

  render() {
    const { orders } = this.props;

    return <FarmForm orders={orders} handleMove={this.handleMoveOrder} />;
  }
}

const mapStateToProps = ({ farm }) => ({
  orders: farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
