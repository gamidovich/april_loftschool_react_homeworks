import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: '',
  };

  componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;
    const number = this.format(cardNumber);

    this.setState(() => ({ number }));
  }

  componentDidMount() {
    const { cardNumber } = this.props;
    const number = this.format(cardNumber);

    this.setState(() => ({ number }));
  }

  format = value => (value === null ? '' : value.replace(/(\d{4})/g, '$1 ').trim());

  normalize = number => number.split(' ').join('');

  handleChange = event => {
    const { value } = event.target;
    const { onChange } = this.props;

    onChange(this.normalize(value));
  };

  render() {
    const { number } = this.state;

    return <input onChange={this.handleChange} value={number} />;
  }
}

export default CardNumberInput;
