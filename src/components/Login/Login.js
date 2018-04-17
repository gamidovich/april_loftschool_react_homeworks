import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = () => {
    if(this.state.email === 'student' && this.state.email.password === 123) {
      return <Redirect to="/" />
    } else if(this.state.email === 'student' && this.state.email.password !== 123){
      return <p className="error"></p>
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    const { isAuthorized } = this.props;
     if (isAuthorized) {
       return <Redirect to="/private" />
     } else {
      return(
        <div>
          <div>
            <input name='email' onChange={this.handleChange} />
            <input name='password' onChange={this.handleChange} />
          </div>
          <button onClick={this.submit}>Submit</button>
        </div>
      );
     }
  }
}

export default AuthHOC(Login);
