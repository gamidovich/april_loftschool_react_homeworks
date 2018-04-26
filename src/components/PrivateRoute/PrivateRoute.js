import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect, Route } from 'react-router-dom'

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, isAuthorized } = this.props;
    return (
      <Route
        render={props => (
          isAuthorized ? (<Component {...props} />) : (<Redirect to="/login" />)
        )}
      />
    )
  }
}

export default AuthHOC(PrivateRoute);
