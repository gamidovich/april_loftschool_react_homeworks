import React, { Component } from 'react';
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
    if(isModalShow){
      return <Modal />
    }
  }
}

export default ModalButton;
