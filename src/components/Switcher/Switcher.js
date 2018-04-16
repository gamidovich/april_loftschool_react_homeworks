import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName


class Switcher extends Component {

  state = { selectedChild: 0 };

  handleChangeChild = (event) => {
    let dataProp = event.target.getAttribute('data-id');
    this.setState({ selectedChild: dataProp });
  }

  // https://mxstbr.blog/2017/02/react-children-deepdive/
  // http://developingthoughts.co.uk/using-the-react-children-api/

  render() {
    const { children } = this.props;
    // const state = this.state;
    const chidrensArr = React.Children.toArray(children);
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, idx) => {
              return (
                <li
                  className="component-list__name"
                  data-id="idx"
                  onClick={this.handleChangeChild}
                >{(this.props.children.displayName) ? this.props.children.displayName : this.props.children.name}
                </li>
              );
            })}
          </ul >
        </nav >
        <hr></hr>
      </div>
    );
  }
}

export default Switcher;
