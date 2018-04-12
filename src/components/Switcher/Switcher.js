import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import ModalButton from '../ModalButton';
// import CardNumberHolder from '../CardNumberHolder'; <CardNumberHolder />
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

const { Provider, Consumer } = React.createContext(0);
export class Switcher extends Component {

  state = { selectedChild: 0 };

  handleChangeChild = () => { // переключение по ссылкам меняет  state
    this.setState(state => {
      return state.selectedChild === 0
        ? { [data - id]: 0 }
        : { [data - id]: 1 };
    });
  }

  render() {
    return (
      <Provider value={this.state.selectedChild}>
        <IntermediateComponent>
          <ThemedButton />
        </IntermediateComponent>
      </Provider>
    );

    //   <div className="switcher">
    //   <nav>
    //     <ul className="component-list">
    //       <li className="component-list__name" data-id={0} onClick={this.handleChangeChild} >VideoPlayer</li>
    //       <li className="component-list__name" data-id={1} onClick={this.handleChangeChild} >Card number formating</li>
    //       <li className="component-list__name" data-id={2} onClick={this.handleChangeChild} >ModalButton</li>
    //     </ul>
    //   </nav>
    //   <hr></hr>
    //   <div className="component-wrapper">
    //       <VideoPlayer />
    //       <br />
    //       <ModalButton />
    //   </div>
    // </div>

  }
}

const IntermediateComponent = ({ children }) => {
  return <div>{children}</div>;
};

function exactComponent(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {theme => (
            <WrappedComponent
              {...this.props}
              theme={theme}
            />
          )}
        </Consumer>
      );
    }
  };
}

const Button = ({ theme }) => (
  <button
    style={{
      backgroundColor: theme === 'light' ? '#333' : '#eee',
    }}
  >
    Кнопка с темой
  </button>
);

const ThemedButton = exactComponent(Button);



// class Switcher extends Component {

//   state = {
//     selectedChild: 0
//   }

//   render() {
//     return (
//       <div className="switcher"></div>
//     );
//   }
// }

export default Switcher;
