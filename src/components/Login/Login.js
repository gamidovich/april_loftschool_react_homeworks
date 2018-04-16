import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

import Errors from './Errors';

class Login extends Component {
  state = {
	  email: '',
	  password: '',
  };

  handleChangeForm = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
      const { email, password } = this.state;
      const { authorizeUser } = this.props;
      authorizeUser(email, password);
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password } = this.props;

    const authForm = (
      <div className="form-group">
        <input type="text" placeholder="Логин"
               name='email'
               value={ email }
               onChange={ this.handleChangeForm }
        />
        <input type="text" placeholder="Пароль"
               name='password'
               value={ password }
               onChange={ this.handleChangeForm }
        />
        <Errors >
          Проверьте логин и пароль.
        </Errors>

        <button className="button-auth"
                onClick={ this.handleClick }
        > Авторизироваться
        </button>
      </div>
    )
    return isAuthorized ? <Redirect to="/private" /> : authForm;
  }
}

export default AuthHOC(Login);
