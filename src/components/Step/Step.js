import React, { Component } from 'react';

class Step extends Component {

  handleClick = (nuber) => {
    this.props.isClickable ? this.props.onClick(this.props.number) : null;
  };

  render() {
    return (
      <div className="step" isSelected isClickable onClick={this.handleClick}>
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
        {this.props.isSelected ? (<div className="step step-selected"></div>) : null}
        {this.props.isClickable ? (<div className="step step-clickable"></div>) : null}
      </div>
    );
  }
}

export default Step;
