import React, { Component } from 'react';

class CardNumberInput extends Component {

  state = {
    number: undefined
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  componentWillMount () {
    this.setState({ number: this.format(this.props.cardNumber) });
  }

  format (value) {
    return (value ? String(value).replace(/(\d{4})/g, '$1 ').trim() : '');
  }

  normalize (value) {
    return (typeof value === 'string') ? value.replace(/\s/g, '') : '';
  }

  onChange = (event) => {
    const cardNumber = this.normalize(event.target.value);

    this.props.onChange(cardNumber);
  }

  render () {
    const { number } = this.state;

    return (
      <input type="text" value={number} onChange={this.onChange} />
    );
  }
}

export default CardNumberInput;
