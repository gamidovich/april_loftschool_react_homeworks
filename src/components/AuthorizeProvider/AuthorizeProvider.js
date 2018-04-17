import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });


// к сожалению тест раннер еще не готов к тестам с новым контекстом
// по этому тут так много кода, изучайте как следует!
// немного кода я все таки вырезал ^^
class AuthorizeProvider extends Component {

  state = {
    isAuthorized: false
  }

  authorzeUser = (param1, param2) => {
    let result;
    (param1 === 'student' && param2 === '123') ? result = true : result = false;
    if (result === true) this.setState({isAuthorized: true});
    return result;
  }

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;

    return (
      <Provider value={{ isAuthorized, authorizeUser: this.authorizeUser }}>{children}</Provider>
    );
  }
}

const AuthHOC = WrappedComponent =>
  class extends Component {
    static displayName = 'AuthHOCWrapper';
    render() {
      return (
        <Consumer>
          {({ isAuthorized, authorizeUser }) => (
            <WrappedComponent {...this.props} {...{ isAuthorized, authorizeUser }} />
          )}
        </Consumer>
      );
    }
  };

export { AuthorizeProvider, AuthHOC };
