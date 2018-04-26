import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

<<<<<<< HEAD
// import { Redirect } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
=======
import { Redirect } from 'react-router-dom';
>>>>>>> 45ecb3b95cb7e66ddab005c44fbacc36ea8960b1
class Login extends Component {

  state = {
    email: '',
    password: 0,
    isAuthFailed: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handelClick = () => {
    const { email, password } = this.state;
<<<<<<< HEAD
    this.props.authorizeUser(email, password);
    this.props.history.push('/');
=======
    if (!this.props.authorizeUser(email, password)) {
      this.setState({ isAuthFailed: true });
    }
>>>>>>> 45ecb3b95cb7e66ddab005c44fbacc36ea8960b1
  }


  render() {
    const { isAuthorized } = this.props;
    const { isAuthFailed } = this.state;
    if (isAuthorized) {
      return <Redirect to="/" />
    } else {
      return (
        <div>
          <div>
            <input name='email' onChange={this.handleChange} />
            <input name='password' onChange={this.handleChange} />
            {isAuthFailed ? <p className="error">Неверное имя или пароль</p> : null}
          </div>
          <button onClick={this.handelClick}>Submit</button>
        </div>
      );
    }
  }
}

<<<<<<< HEAD
}

=======
>>>>>>> 45ecb3b95cb7e66ddab005c44fbacc36ea8960b1
export default AuthHOC(Login);
