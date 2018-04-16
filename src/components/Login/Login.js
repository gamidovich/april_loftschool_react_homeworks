import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
	  userLogin: '',
	  userPass: '',
  };

  handleChangeForm = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
      const { userLogin, userPass } = this.state;
      const { authorizeUser } = this.props;
      authorizeUser(userLogin, userPass);
  };

  render() {
    const { isAuthorized } = this.props;
    const { userLogin, userPass } = this.props;

    const authForm = (
      <div className="form-group">
        <input type="text" placeholder="Логин"
               name='userLogin'
               value={ userLogin }
               onChange={ this.handleChangeForm }
        />
        <input type="text" placeholder="Пароль"
               name='userPass'
               value={ userPass }
               onChange={ this.handleChangeForm }
        />

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
