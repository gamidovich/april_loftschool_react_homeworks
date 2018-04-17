import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {

  state = {
    selectedChild: 0
  }
  handleChangeChild = e => {
    this.setState({selectedChild: e.target.dataset.id})
  }
  render() {
    const {children} = this.props
    const {selectedChild} = this.state

    return (
      <nav>
        <ul className='component-list'>
          {children.map((child, id) => {
            return (<li className='component-list__name'
            key={id}
            data-id={id}
            onClick={this.handleChangeChild}
            >
            {child.type.displayName||child.type.name}
            </li>)
          })}
        </ul>
        <hr></hr>
        <div className='component-wrapper'>
          {children[selectedChild]}
        </div>
      </nav>
    );
  }
}

export default Switcher;
