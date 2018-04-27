import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  handleChangeForm = evt => {
    return this.props.onChangeForm(evt.target.name, evt.target.value);
  };

  componentWillUnmount = () => {};

  render() {
    return (
      <div className="card-form" data-test="card-form">
        <input type="text" name="cardNumber" onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default CardForm;
