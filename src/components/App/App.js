import React, {Component} from 'react';
import './App.css'

import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm'
import Step from 'components/Step'


class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  }

  handleTabClick = (currentStep) => {
      this.setState({step: currentStep});
  };

  handleChangeForm = (name, value) => {
    if (this.isFormCommitable) {
      this.setState({ [name]: value });
    }
  };

  isFormCommitable = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;

    return ((step === 1 && firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) || (step === 2 && cardNumber.length === 16) || false);

  };

  handleClickNextForm = () => {
    const {step} = this.state;
    if (step < 3) {
      this.setState(state => ({
        step: step + 1
      }));
    }
  };

  renderForm = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;
    if (step === 1) {
      return <PersonalForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        onChangeForm={this.handleChangeForm}/>
    } else if (step === 2) {
      return <CardForm
        cardNumber={cardNumber}
        onChangeForm={this.handleChangeForm} />
    }
    if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>
    }
    return null;
  };

  stepsTitle = ['Персональная информация', 'Номер карты', 'Результат'];

  render() {
    const {step} = this.state;

    const button = (this.state.step === 3 ? true : false) ?  ("") : (
        <button
            className='button-next'
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}> Далее
        </button>
    );

    return (
      <div className='container'>
        <div className='tab-panel'>
            { this.stepsTitle.map(( item, index ) =>
                < Step
                    key = { index }
                    number = { index + 1 }
                    children = { item }
                    isSelected = { index + 1 === step }
                    isClickable = { index < step }
                    onClick = { this.handleTabClick}
                />)}
        </div>
        <div className='form-content'> { this.renderForm() } </div >
          <div className='button-panel'>
              { button }
          </div>
      </div>
    )
  }
}

export default App;