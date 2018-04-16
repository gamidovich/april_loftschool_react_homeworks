import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

  state = {
    cardNumber: ''
  };

  static displayName = 'CardNumberHolder';

  handleChange = (event) => { // запсиатьв пропсы инпута введенные значения
    const ev = event.target.value;
    this.setState(creditCardInput => ({ cardNumber: ev }));
  }

  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;
