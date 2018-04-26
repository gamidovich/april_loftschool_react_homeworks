// import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, children }) =>
  show
    ? ReactDOM.createPortal(
      children,
      document.getElementById('portal'),
    )
    : null;

export default Modal;

// class Modal extends Component {

//   componentWillMount() {
//     // toggle = () => {
//     const { show, children } = this.props;
//     console.log(this.props);
//     if (show) {
//       ReactDOM.createPortal(
//         children,
//         document.getElementById('portal'))
//     } else return null;
//     // }
//   }

//   render() {
//     return (
//       <div className="modal">
//         <div className="modal__fog">
//           <div className="modal__body">
//             <h1>Модальное окно!</h1>
//             <button onClick={this.closeModal}>Close me</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }




