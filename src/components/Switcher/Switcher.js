import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0,
  };

  handleChangeChild = event => {
    const id = event.target.dataset.id;

    this.setState(() => ({ selectedChild: id }));
  };

  renderNav = () => {
    const { children } = this.props;

    return (
      <nav>
        <ul className="component-list">
          {React.Children.map(children, (child, index) => {
            const name = child.type.displayName || child.type.name;

            return (
              <li
                key={name}
                data-id={index}
                onClick={this.handleChangeChild}
                className="component-list__name"
              >
                {name}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };
  render() {
    const { selectedChild } = this.state;
    const { children } = this.props;

    return (
      <div className="switcher">
        {this.renderNav()}
        <hr />
        <div className="component-wrapper">{React.Children.toArray(children)[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
