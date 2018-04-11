import React, { Component } from 'react';
import CardForm from '../CardForm';
import PersonalForm from '../PersonalForm';
import Step from '../Step';
import Title from '../Title';
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
      } else if (state.firstName === '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')) {
        return false;
      } else if (state.firstName !== '' && state.lastName === '' && state.email !== '' && state.email.includes('@')) {
        return false;
      } else if (state.firstName !== '' && state.lastName !== '' && state.email === '' && state.email.includes('@')) {
        return false;
      }
    } else if (state.step === 2) {
      (state.cardNumber.length === 16) ? true : false
    } else if (state.step !== 1 | 2) { return false }
  }

  renderForm = () => {
    if (this.state.step === 1) {
      return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.handleChangeForm} />
    } else if (this.state.step === 2) {
      return <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />
    } else if (this.state.step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          <Step number={1}>Personal information</Step>
          <Step number={2}>Card information</Step>
          <Step number={3}>Finish</Step>
        </div>
        <div className="form-content">
          <div className="" data-test="personal-form">
            <Title step={this.state.step} />
            {this.renderForm()}
          </div>
        </div>
        <div className="button-panel">
          <button className="button-next"
            onClick={this.handleClickNextForm}
            disabled={this.isFormCommitable}>Next
          </button>
        </div>
      </div>
    );
  }

}
export default App;
