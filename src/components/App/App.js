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

  handleChangeForm = (a, b) => {
    const stateKeys = Object.keys(this.state);
    stateKeys.map(keyName => {
      if (keyName === a) { this.setState({ [keyName]: b }) };
      return null;
    })
  }

  renderForm = () => {
    const { step } = this.state;
    if (step === 1) {
      return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.handleChangeForm} />
    } else if (step === 2) {
      return <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />
    } else if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  handleTabClick = (step) => {
    this.setState({ step });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1) {
      if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) return true;
      /**
       * Оставлю для анализа - как делать не надо
       */
      // const state = this.state;
      // if (state.step === 1) {
      //   if (state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')) {
      //     return false;
      //   } else if (state.firstName === '' || state.lastName !== '' || state.email !== '' || !state.email.includes('@')) {
      //     return true;
      //   } else if (state.firstName !== '' || state.lastName === '' || state.email !== '' || !state.email.includes('@')) {
      //     return true;
      //   } else if (state.firstName !== '' || state.lastName !== '' || state.email === '' || !state.email.includes('@')) {
      //     return true;
      //   }

    } else if (step === 2) {
      if (cardNumber.length === 16) return true;

    } else if (step !== 1 | 2) return false;
  }

  handleClickNextForm = () => {
    this.setState(({ step }) => ({ step: step + 1 }));
  }

  render() {
    let isDisabled = !this.isFormCommitable(); // так как должно быть по умолчанию false, а ф-ция вернула true
    const { step } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          <Step number={1} isClickable={step > 1} isSelected={step === 1} onClick={this.handleTabClick}>Personal information</Step>
          <Step number={2} isClickable={step > 2} isSelected={step === 2} onClick={this.handleTabClick}>Card information</Step>
          <Step number={3} isClickable={false} isSelected={step === 3} onClick={this.handleTabClick}>Finish</Step>
        </div>
        <div className="form-content">
          <div className="" data-test="personal-form">
            <Title step={step} />
            {this.renderForm()}
          </div>
        </div>
        <div className="button-panel">
          <button className="button-next"
            type="button"
            onClick={this.handleClickNextForm}
            disabled={isDisabled}>Next
          </button>
        </div>
      </div>
    );
  }

}
export default App;
