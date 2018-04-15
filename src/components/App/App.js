import React, { Component } from 'react';
import Switcher from '../Switcher';
import './App.css';


// import VideoPlayer from '../VideoPlayer';
// import ModalButton from '../ModalButton';
// import CardNumberHolder from '../CardNumberHolder';

class App extends Component {

  state = { selectedChild: 0 };

  handleChangeChild = (event) => {
    let dataProp = event.target.getAttribute('data-id');
    this.setState({ selectedChild: dataProp });
  }

  render() {
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            <li className="component-list__name" data-id="0" onClick={this.handleChangeChild} >VideoPlayer</li>
            <li className="component-list__name" data-id="1" onClick={this.handleChangeChild} >Card number formating</li>
            <li className="component-list__name" data-id="2" onClick={this.handleChangeChild} >ModalButton</li>
          </ul >
        </nav >
        <hr></hr>
        <Switcher value={this.state.selectedChild}>
        </Switcher>
      </div >

    );
  }
}

export default App;
