import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: '',
  };

  handleChange = cardNumber => this.setState(() => ({ cardNumber }));

  render() {
    const { cardNumber } = this.state;

    return <CardNumberInput onChange={this.handleChange} cardNumber={cardNumber} />;
  }
}

export default CardNumberHolder;
