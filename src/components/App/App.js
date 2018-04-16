import React, { Component } from 'react';
import Switcher from '../Switcher';
import './App.css';

import VideoPlayer from '../VideoPlayer';
import ModalButton from '../ModalButton';
import CardNumberHolder from '../CardNumberHolder';

class App extends Component {

  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <ModalButton />
        <CardNumberHolder />
      </Switcher>
    );
  }

}

export default App;
