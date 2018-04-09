import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {

  handleChangeForm = (evt) => {
    return this.props.onChangeForm(evt.target.name, evt.target.value);
  }

  componentWillUnmount = () => {
    constructor()
  }

  render() {
    return (
      <div className="card-form">
        <input type="text" name="cardNumber" onChange={this.handleChangeForm} change={this.onChangeForm} />
      </div>
    );
  }
}

export default CardForm;

// value={cardNumber}
