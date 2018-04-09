import React, { Component } from 'react';
import CardForm from '../CardForm';
import PersonalForm from '../PersonalForm';
import './App.css';

class App extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  }

  handleTabClick = (arg) => {
    this.setState(({ step }) => ({ step: arg }));
  };

  handleChangeForm = (a, b) => {
    const stateKeys = Object.keys(this.state);
    stateKeys.map(keyName => {
      if (keyName === a)
        this.setState({ [keyName]: b });
    })
  }

  handleClickNextForm = () => {
    this.setState(({ step }) => ({ step: step + 1 }));
  }

  isFormCommitable = () => {
    const state = this.state;
    if (state.step === 1) {
      if (state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')) {
        return true;
      } else if (state.firstName !== '' && state.lastName === '' && state.email !== '' && state.email.includes('@')) {
        return false;
      } else if (state.firstName !== '' && state.lastName !== '' && state.email === '' && state.email.includes('@')) {
        return false;
      }
    } else if (state.step === 2) {
      if (state.cardNumber.length === 16) {
        return true;
      }
    } else if (state.step !== 1 | 2) {
      return false;
    }
  }

  renderForm = () => { };

  render() {
    return (
      <div className="container">
        <div className="tab-panel"></div>
        <div className="form-content"><CardForm /></div>
        <div className="button-panel">
          <button className="button-next" onClick={this.handleClickNextForm} disable="true"></button>
        </div>
      </div>
    );
  }

}
export default App;
