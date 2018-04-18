import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

import Private from "components/Private";

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;
    if (isAuthorized) return <Private />
    else return <Redirect to="/login" />
  }
}

export default AuthHOC(PrivateRoute);
