import React, { Component } from 'react';


// переделать с учтом тоого что есть компонент CardNumberInput LifeCycke как пример

class CardNumberHolder extends Component {

  state = {
    creditCardInput: this.props.onChange // можно использовать значения из пропсов
  };

  onCardInput = (event) => { // запсиатьв пропсы инпута введенные значения
    const ev = event.target.value;
    this.setState(creditCardInput => ({ creditCardInput: ev }));
  }

  static defaultProps = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps); // то что задали в props компоненты
    console.log(prevState); // то что задавалось в объекте state
    console.log('getDerivedStateFromProps');
    // return {
    //   creditCardInput: nextProps.creditCard // меняем props компоненты для отформатированного вида
    //     .replace(/(\d{0,4})/g, '$1 ')
    //     .trim(),
    // };
  }

  render() {
    return (
      <input type="text" onChange={this.onCardInput} />
    );
  }
}

export default CardNumberHolder;
