import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {

  handleChangeForm = (evt) => {
    return this.props.onChangeForm(evt.target.name, evt.target.value);
  }

  render() {
    return (
      <div className="personal-form">
        <input type="text" name="firstName" onChange={this.handleChangeForm} />
        <input type="text" name="lastName" onChange={this.handleChangeForm} />
        <input type="text" name="email" onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default PersonalForm;

// change={this.onChangeForm}
