import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

  renderTitle = () => {
    if (this.props.step === 1) {
      return "Персональная информация";
    } else if (this.props.step === 2) {
      return "Информация о карте"
    } else if (this.props.step === 3) {
      return "Поздравляем";
    }
  };

  render() {
    return <h1 className="title">{this.renderTitle()}</h1>
  }
}

export default Title;
