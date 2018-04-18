import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

// import { Redirect } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
class Login extends Component {

  state = {
    email: '',
    password: 0
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handelClick = () => {
    const { email, password } = this.state;
    this.props.authorizeUser(email, password);
    this.props.history.push('/');
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    const { isAuthorized } = this.props;
    if (isAuthorized) {
      return <PrivateRoute />
    } else {
      return (
        <div>
          <div>
            <input name='email' onChange={this.handleChange} />
            <input name='password' onChange={this.handleChange} />
          </div>
          <button onClick={this.handelClick}>Submit</button>
        </div>
      );
      // }
    }
  }

}

export default AuthHOC(Login);
