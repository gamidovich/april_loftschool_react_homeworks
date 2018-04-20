import React, {Component} from 'react';

class CardNumberInput extends Component {

  state = {
    number: undefined
  }

  format = (v) => {
    return (v=String(v)
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim());
  }
  normalize = (v) => {
    return v.replace(/\s/g, '')
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({number: this.format(nextProps.cardNumber)})
  }
  componentWillMount = () => {
    this.setState({ number: this.format(this.props.cardNumber)})
  }

  onChange = (e) => {
    this.setState({number: this.format(e.target.value)});
    /* return this.props.onChange(cardNumber); */
  }

  render() {
    return <input value={this.state.number} className="CardNumberInput" onChange={this.onChange} />;
  }
}

export default CardNumberInput;
