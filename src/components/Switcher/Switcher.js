import React, { PureComponent } from 'react';
import VideoPlayer from '../VideoPlayer';
import ModalButton from '../ModalButton';
import CardNumberHolder from '../CardNumberHolder';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName


class Switcher extends PureComponent {

  render() {
    const block = this.props.value;
    return this.props.render({ block });
  }

  // render() {
  // let componentBlock = null;
  // console.log(this.props.value);
  // if (this.props.value === 0) { componentBlock = < VideoPlayer /> }
  // else if (this.props.value === 1) { componentBlock = <ModalButton /> }
  // else if (this.props.value === 2) { componentBlock = <CardNumberHolder /> }
  // return (<div className="component-wrapper">{componentBlock}</div>);
  //   }
}

// export default Switcher;

export default () => {
  <Switcher render={({ block }) => <p>{block}</p>}></Switcher >
}
