import React, { Component } from 'react';

class CardNumberInput extends Component {

  format = (input) => { input.replace(/(\d{0,4})/g, '$1 ') };

  normalize = (input) => { input.trim() };

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
    this.setState({ cardNumber: this.format(nextProps.cardNumber) });
  }

  render() {
    console.log(this.state);
    return (
      <input type="text"
        onChange={this.props.onChange}
      // value={this.state.cardNumber}
      />
    );
  }
}

export default CardNumberInput;
