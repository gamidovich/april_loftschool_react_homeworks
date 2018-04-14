import React, {Component} from 'react';

class CardNumberHolder extends Component {
  static displayName = 'Card number formating'

  state = {
    cardNumber: ''
  }

  render() {
    const {handleChange} = this.props
    return (
      <input className='CardNumberInput' onChange={handleChange}/>
    );
  }
}

export default CardNumberHolder;
