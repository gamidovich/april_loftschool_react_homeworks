import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';
import Order from '../Order';
import './Farm.css';

export class Farm extends Component {
  handleClickMove = () => {
    const { ordersFarm, moveOrderToCustomer } = this.props;
    const order = ordersFarm[ordersFarm.length - 1];

    moveOrderToCustomer(order);
  };

  render() {
    const { ordersFarm } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={ordersFarm.length === 0} onClick={this.handleClickMove}>
          Отправить урожай клиенту
        </button>
        <div>{ordersFarm.map((order, idx) => <Order key={order.id} {...order} />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.farm });

const mapDispatchToProps = {
  moveOrderToCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
