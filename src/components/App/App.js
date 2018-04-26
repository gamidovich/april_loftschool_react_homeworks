import React, { PureComponent } from 'react';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Login from "../Login";
import Public from '../Public'
import Private from '../Private'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
          <ul>
              <li><Link to='/'>Главная</Link></li>
              <li><Link to='/login' >Войти</Link></li>
              <li><Link to='/private'>Секретная страница</Link></li>
          </ul>
          </nav>
          <Switch> 
            <Route exact path='/' component={Public}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/private' component={Private}/>
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
