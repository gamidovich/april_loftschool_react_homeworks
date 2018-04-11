import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import CardNumberHolder from '../CardNumberHolder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            <div className="component-list__name">VideoPlayer</div>
            <div className="component-list__name">Card number formating</div>
            <div className="component-list__name">ModalButton</div>
          </ul>
        </nav>
        <hr></hr>
        <div className="component-wrapper">
          <VideoPlayer />
          <br />
          <CardNumberHolder />
        </div>
      </div>
    );
  }
}

export default App;
