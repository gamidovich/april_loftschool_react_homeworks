import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const { children } = this.props;
    const rootModal = document.getElementById('portal');

    return ReactDOM.createPortal(children, rootModal);
  }
}

export default Modal;
