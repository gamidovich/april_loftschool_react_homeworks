import React, { PureComponent } from 'react';
import { Route, Link, Switch, withRouter} from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

import Login from "../Login";
import Public from "../Public";
import Private from "../Private";

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Войти</Link>
              </li>
              <li>
                <Link from="/private" to="/login">Секретная страница </Link>
              </li>
              <li>
                <Link to="/">Главная</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Redirect from="/private" to="/login" /> */}
            <Route path='/private' component={Private} />
            <Route path="/" exact component={Public} />
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
