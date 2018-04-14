import React from 'react'
import PersonalForm from "../PersonalForm/PersonalForm";
import CardForm from "../CardForm";
import Step from '../Step'
import './App.css'

export default class App extends React.Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    }

    handleTabClick = e => this.setState({step: e});

    handleChangeForm = (name, value) => this.setState({[name]:value})

    handleClickNextForm = () => {
        let val = this.state.step
        this.setState({step: val + 1})
    }

    isFormCommitable = () => {
        if(this.state.step === 1) {
            if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('@')) return true;
        }
        else if(this.state.step === 2) {
            if (this.state.cardNumber.length === 16) return true
        }
        else return false
    }

    renderForm = () => {
        const {cardNumber, firstName, lastName, email, step} = this.state
        if(step === 1){
            return (
                <PersonalForm data-test="personal-form" firstName={firstName} lastName={lastName} email={email} onChangeForm = {this.handleChangeForm}/>
            );
        }
        else if(step === 2){
            return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm}/>
        }
        else if (step === 3){
            return <p data-test="congratulations">Поздравляем!</p>
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='tab-panel'>
                    <Step number={1} children={'Personal information'}
                        isSelected={this.state.step === 1 ? true : false} 
                        isClickable={this.state.step !== 1  ? true : false}
                        onClick={this.handleTabClick}/>
                    <Step number={2} children={'Card information'}
                        isSelected={this.state.step === 2 ? true : false}
                        isClickable={this.state.step !== 2 && this.state.step !== 1 ? true : false}
                        onClick={this.handleTabClick}/>
                    <Step number={3} children={'Finish!'}
                        isSelected={this.state.step === 3 ? true : false}
                        isClickable={this.state.step !== 3 && this.state.step !== 1 && this.state.step !== 3 && this.state.step !== 2 ? true : false}
                        onClick={this.handleTabClick}/>
                </div>
                <div className='form-content'>
                    <form className='title'>
                        {this.renderForm()}
                    </form>
                </div>
                <div className='button-panel'>
                    <button disabled={!this.isFormCommitable()} className='button-next' onClick={this.handleClickNextForm}>Далее</button>
                </div>
            </div>
        );
    }

}