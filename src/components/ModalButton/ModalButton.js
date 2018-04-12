import React, { Fragment, Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';
class ModalButton extends Component {

  state = {
    isShowModal: false,
  };


  closeModal = () => {
    this.setState(state => ({
      isShowModal: false,
    }));
  };

  showModal = () => {
    this.setState(state => ({
      isShowModal: true,
    }));
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <Fragment>
        <button onClick={this.showModal}> Show modal!</button>
        <Modal show={isShowModal}>
          <div className="modal">
            <div className="modal__fog">
              <div className="modal__body">
                <h1>Модальное окно!</h1>
                <button onClick={this.closeModal}>Close me</button>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalButton;
