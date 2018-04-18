import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

  state = {
    cardNumber: ''
  };

  static displayName = 'CardNumberHolder';

  handleChange = (number) => { // запсиать в пропсы инпута введенные значения
    this.setState({ cardNumber: number });
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
