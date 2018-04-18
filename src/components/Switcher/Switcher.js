
import React, { Component, Fragment } from 'react';
import './Switcher.css';

class Switcher extends Component {

  state = {
    selectedChild: 0
  }

  handleChangeChild = (e) => {
    e.persist();
    this.setState((prevState) => ({ selectedChild: e.target.getAttribute('data-id') }));
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    const { selectedChild } = this.state;

    return (
      <Fragment>
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, idx) => (
              <li className="component-list__name" onClick={this.handleChangeChild} data-id={idx}>
                {child.type.displayName || child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{children[selectedChild]}</div>
      </Fragment>
    );
  }
}

export default Switcher;


// class Switcher extends Component {

//   state = { selectedChild: 0 };

//   handleChangeChild = (event) => {
//     let index = event.target.attributes.getNamedItem("data-id").value;
//     this.setState({ selectedChild: index });
//   }

  // getChildComponent = () => {
  //   const state = this.state;
  //   let childComponent = null;
  //   if (state.selectedChild === 0) {
  //     childComponent = <VideoPlayer />
  //   } else if (state.selectedChild === 1) {
  //     childComponent = <ModalButton />
  //   } else if (state.selectedChild === 1) {
  //     childComponent = <CardNumberHolder />
  //   }
  //   return childComponent;
  // }

//   render() {
//     // console.log(this.state.selectedChild);
//     const childrensArr = React.Children.toArray(this.props.children);
//     return (
//       <div className="switcher">
//         <nav>
//           <ul className="component-list">
//             {childrensArr.map((el, i) => {
//               return <li
//                 className="component-list__name"
//                 data-id={i}
//                 key={i}
//                 onClick={this.handleChangeChild}
//               >{(el.type.displayName) ? el.type.displayName : el.type.name}
//               </li>
//             })}
//           </ul >
//         </nav >
//         <hr></hr>
//         <div className="component-wrapper">{this.getChildComponent()}</div>
//       </div>
//     );
//   }
// }

// export default Switcher;
