import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className='modal'>
        <div className='modal-fog'>
          <div className='modal-body'>
            <h1>Модалочка!</h1>
            <button>Закрыть</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
