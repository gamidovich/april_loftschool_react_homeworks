import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import ModalButton from '../ModalButton';
import CardNumberHolder from '../CardNumberHolder';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName


class Switcher extends Component {

  /**
   * Первый компонент рендреритмя, остальные нет. Хотя состояние и props.value приходят правильные.
   * Не срабатывает условие.
   */
  render() {
    let componentBlock = null;
    console.log(this.props.value);
    if (this.props.value === 0) { componentBlock = <VideoPlayer /> }
    else if (this.props.value === 1) { componentBlock = <ModalButton /> }
    else if (this.props.value === 2) { componentBlock = <CardNumberHolder /> }
    return (<div className="component-wrapper">{componentBlock}</div>);
  }

  /**
   * С использованием  React.Children.toArra и Arrya.slice - также ничего не выходит
   */
  // render() {
  //   const children = React.Children.toArray(this.props.children);
  //   console.log(this.props.value);
  //   if (this.props.value === 0) { return children.slice(0, 1) }
  //   else if (this.props.value === 1) { return children.slice(1, 2) }
  //   else if (this.props.value === 2) { return children.slice(-1) }
  // }
}

export default Switcher;

