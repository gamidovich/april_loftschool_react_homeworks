import React, { Component } from 'react';

class CardNumberInput extends Component {

  static defaultProps = {};

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps); // то что задали в props компоненты
  //   console.log(prevState); // то что задавалось в объекте state
  //   console.log('getDerivedStateFromProps');
  // return {
  //   creditCardInput: nextProps.creditCard // меняем props компоненты для отформатированного вида
  //     .replace(/(\d{0,4})/g, '$1 ')
  //     .trim(),
  // };
  // }

  onCardInput() {
    // console.log(this.props);
    // console.log(this.state);
    // this.setState(creditCardInput => ({ creditCardInput: this.target.event }));
    return console.log('child method called');
  }

  // onCardInput = (event) => { // запсиать в пропсы инпута введенные значения
  // const ev = event.target.value;
  // this.setState(creditCardInput => ({ creditCardInput: 'event value' }));
  // }

  render() {
    return (
      <input type="text"
      // onChange={this.onCardInput}
      // ref={component => (this.child = component)}
      // value={this.state.value}
      />
    );
  }
}

export default CardNumberInput;
