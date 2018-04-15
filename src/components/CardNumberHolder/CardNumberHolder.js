import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

  state = {
    creditCardInput: ''
  };

  onCardInput = (event) => { // запсиатьв пропсы инпута введенные значения
    const ev = event.target.value;
    this.setState(creditCardInput => ({ creditCardInput: ev }));
  }

  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.creditCardInput}
        onChange={this.onCardInput}
      />
    );
  }
}

export default CardNumberHolder;
