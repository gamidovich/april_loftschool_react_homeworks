import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  state = {
    email: '',
    password: '',
    isAuth: true
  }
  handleClick = () => {
    const {email, password} =this.state
    const {authorizeUser} = this.props
    let auth = authorizeUser(email, password);
    this.setState({ isAuth: auth})
  }
  render() {
    const {isAuth} = this.state
    const { isAuthorized } = this.props;
    
     
    if(isAuthorized) { 
      return <Redirect to="/" />
    } 
    return (<div>
      <input name='email' onChange={this.handleChange}/>
      <input name='password' onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Submit</button>
        {!isAuth && <p className='error'>неверный логин или пароль</p>}
      </div>);
  }
}

export default AuthHOC(Login);
