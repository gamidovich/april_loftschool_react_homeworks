import React, { Component, Fragment } from 'react';
import './ModalButton.css';
import Modal from './Modal'

class ModalButton extends Component {

  static displayName = 'Modal button'
  state = {
    isModalShow: false
  }
  hideModal = () => this.setState({isModalShow: false})

  showModal = () => this.setState({ isModalShow: true })
  render() {
    const {isModalShow} = this.state
    return (
      <Fragment>
      <button onClick={this.showModal}>кнопка</button>
      <Modal show={isModalShow}>
        <h1>Модалочка</h1>
        <button onClick={this.hideModal}>закрыть</button>
      </Modal>
      </Fragment>
    );
  }
}

export default ModalButton;
