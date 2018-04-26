import React, { PureComponent } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

import Login from "components/Login";
import Public from "components/Public";
<<<<<<< HEAD
import PrivateRoute from "components/PrivateRoute";
// import Private from "../Private";
=======
import PrivateRoute from 'components/PrivateRoute';


>>>>>>> 45ecb3b95cb7e66ddab005c44fbacc36ea8960b1
export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li><Link to="/login">Войти</Link></li>
              <li><Link to="/private">Секретная страница</Link></li>
              <li><Link to="/">Главная</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Public} />
            <Route path="/login" component={Login} />
<<<<<<< HEAD
            <Route to="/private" component={PrivateRoute} />
            <Route path="/" exact component={Public} />
=======
            <Route path="/private" component={PrivateRoute} />
>>>>>>> 45ecb3b95cb7e66ddab005c44fbacc36ea8960b1
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
