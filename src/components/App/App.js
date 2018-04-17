<<<<<<< HEAD
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
=======
import React, { PureComponent } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <Switch />
        </div>
      </AuthorizeProvider>
>>>>>>> ee9154f469f88197cfa8ca9daceaa7860685ba7e
    );
  }
}

<<<<<<< HEAD
export default App;
=======
// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
>>>>>>> ee9154f469f88197cfa8ca9daceaa7860685ba7e
