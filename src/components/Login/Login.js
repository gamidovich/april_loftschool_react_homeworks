import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

import { Redirect } from 'react-router-dom';
class Login extends Component {
  state = {
    email: '',
    password: 0,
    isAuthFailed: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handelClick = () => {
    const { email, password } = this.state;
    if (!this.props.authorizeUser(email, password)) {
      this.setState({ isAuthFailed: true });
    }
  };

  render() {
    const { isAuthorized } = this.props;
    const { isAuthFailed } = this.state;
    if (isAuthorized) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <div>
            <input name="email" onChange={this.handleChange} />
            <input name="password" onChange={this.handleChange} />
            {isAuthFailed ? <p className="error">Неверное имя или пароль</p> : null}
          </div>
          <button onClick={this.handelClick}>Submit</button>
        </div>
      );
    }
  }
}

export default AuthHOC(Login);
