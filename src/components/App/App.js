import React, { PureComponent } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

import Login from 'components/Login';
import Private from 'components/Private';
import Public from 'components/Public';
import PrivateRoute from 'components/PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
          <nav>
              <Link to="/" className="link">Главная</Link>{''}
              <Link to="/private" className="link">Секретная страница</Link>{''}
              <Link to="/login" className="link">Войти</Link>
          </nav>
        <hr />
        <div>
            <Switch>
                <Route
                    path="/"
                    exact component={ Public }
                />
                <Route
                    path="/login"
                    component = { Login }
                />
                <PrivateRoute
                    path="/private"
                    component={ Private}
                />
            </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
