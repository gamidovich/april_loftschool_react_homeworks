import React, { Component } from 'react';

class Step extends Component {

  handleClick = () => {
    this.props.isClickable ? this.props.onClick : null;
  }
  onClick = () => { };

  render() {
    return (
      <div className="step" isSelected isClickable onClick={this.onClick(this.props.number)}>
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
        {this.props.isSelected ? (<div className="step step-selected"></div>) : null}
        {this.props.isClickable ? (<div className="step step-clickable"></div>) : null}
      </div>
    );
  }
}

export default Step;
