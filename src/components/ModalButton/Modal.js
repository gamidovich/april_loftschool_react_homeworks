import React from 'react';
import ReactDOM from 'react-dom';
class Modal extends React.Component {
  render() {
    const {show, children} = this.props
    return show
      ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal__fog">
            <div className="modal__body">
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('portal')
      )
     : null;
  }
}

export default Modal;
