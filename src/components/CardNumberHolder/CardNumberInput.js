import React, { Component } from 'react';

class CardNumberInput extends Component {

  state = {
    // creditCardInput: this.props.cardNumber
    formatedInput: this.props.cardNumber
  }

  static defaultProps = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps); // то что задали в props компоненты
    console.log(prevState); // то что задавалось в объекте state
    // console.log('getDerivedStateFromProps');
    return {
      formatedInput: nextProps.cardNumber // меняем props компоненты для отформатированного вида
        .replace(/(\d{0,4})/g, '$1 ')
        .trim(),
    };
    // return null;
  }

  render() {
    // console.log(this.state);
    return (
      <input type="text"
        onChange={this.props.onChange}
        value={this.state.formatedInput}
      />
    );
  }
}

export default CardNumberInput;
