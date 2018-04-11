import React, { Component } from 'react';
import './CardForm.css';
import Title from '../Title/Title';

export default class CardForm extends Component {
    handleChangeForm = (event) => {
        const {name, value} = event.target;

        this.props.onChangeForm(name, value);
    };

    render() {
        return (
            <div>
                <Title text="Номер карты"/>
                <div className="card-form" data-test="card-form">
                    <input
                        type="text"
                        onChange={this.handleChangeForm}
                        name="cardNumber"
                        value={this.props.cardNumber}
                        placeholder="0000000000000000"/>
                </div>
            </div>
        )
    }

    componentWillUnmount() { };
};