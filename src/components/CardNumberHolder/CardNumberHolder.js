import React, { Component } from 'react';
// import CardNumberInput from './CardNumberInput';


class CardNumberInput extends Component {

  onInputChange(event) {
    this.val = event.target.value;
    return this.val;
  }

  componentDidMount() {
    console.log(this.val);
    console.log(this.props);
  }

  // childMethod() {
  //   return console.log("childe method called");
  // }

  render() {
    // console.log(this.props); //foo
    return (
      <input type="text"
        onChange={this.onInputChange}
      // ref={component => (this.child = component)}
      // value={this.state.value}
      />
    );
  }
}

class CardNumberHolder extends Component {

  state = {
    creditCardInput: ''// можно использовать значения из пропсов this.props.onChange
  };

  setState() {
    this.setState(creditCardInput => ({ creditCardInput: 'new state' }));
    // console.log(
    // this.child.onInputChange() // child method called
    // );
    // this.child.childMethod();
  }

  render() {
    console.log(this.state);
    return <CardNumberInput ref={component => (this.child = component)} setState={this.setState} />; //inputProp={this.childMethod}
  }
}


// class CardNumberHolder extends Component {

//   state = {
//     creditCardInput: ''// можно использовать значения из пропсов this.props.onChange
//   };

//   componentDidMount() {
//     this.child.onCardInput();
//     // console.log(this.children);
//     // this.setState(creditCardInput => ({ creditCardInput: 'event value' }));
//     // console.log(
//     //   this.child.onCardInput() // child method called
//     // );
//   }

//   render() {
//     console.log(this.state);
//     return <CardNumberInput ref={component => (this.child = component)} />; //
//   }
// }


// class CardNumberHolder extends Component {

//   state = {
//     creditCardInput: this.props.onChange // можно использовать значения из пропсов
//   };

//   onCardInput = (event) => { // запсиатьв пропсы инпута введенные значения
//     const ev = event.target.value;
//     this.setState(creditCardInput => ({ creditCardInput: ev }));
//   }

//   static defaultProps = {};

//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log(nextProps); // то что задали в props компоненты
//     console.log(prevState); // то что задавалось в объекте state
//     console.log('getDerivedStateFromProps');
//     // return {
//     //   creditCardInput: nextProps.creditCard // меняем props компоненты для отформатированного вида
//     //     .replace(/(\d{0,4})/g, '$1 ')
//     //     .trim(),
//     // };
//   }

//   render() {
//     return (
//       <CardNumberInput />
//     );
//   }
// }

export default CardNumberHolder;
