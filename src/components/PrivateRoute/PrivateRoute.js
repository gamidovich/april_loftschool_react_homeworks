import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

import Private from "../Private";

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;
    if (isAuthorized) return <Private />
    else return <p className="error">error</p>
  }
}

export default AuthHOC(PrivateRoute);
