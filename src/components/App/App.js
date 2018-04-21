import React, { Component } from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';

export class App extends Component {
  render() {
    const { budget } = this.props;
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget {...budget} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state,
});
export default App;
