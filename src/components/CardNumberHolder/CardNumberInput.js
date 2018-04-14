import React, {Component} from 'react';

class CardNumberInput extends Component {


  format = () => {
    this.target.value = this.target.value.replace(/\d{4}/g, '')
  }
  normalize = () => {
    this.target.value = this.target.value.replace(/\d{4}/g, '')
  }
  render() {
    return (
      <input className='CardNumberInput' />
    );
  }
}

export default CardNumberInput;
