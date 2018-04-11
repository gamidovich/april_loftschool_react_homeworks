import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

  handleClick = (number) => {
    this.props.isClickable ? this.props.onClick(this.props.number) : null;
  };

  render() {
    return (
      <div className="step" isSelected isClickable onClick={this.handleClick}>
        <p className="step__number">{this.props.number}</p>
        <p className="step__title">{this.props.children}</p>
        {this.props.isSelected ? (<div className="step step-selected"></div>) : null}
        {this.props.isClickable ? (<div className="step step-clickable"></div>) : null}
      </div>
    );
  }
}

export default Step;
