import React, { Component } from 'react';
import {
    Route,
    Link,
    Redirect,
    Switch,
} from 'react-router-dom';

import './AuthorizeProvider.css';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

class AuthorizeProvider extends Component {

    state = {
        isAuthorized: false,
    };

	authorizeUser = () => {
		this.setState( ({ isAuthorized }) => ({ isAuthorized: true}));
    };

	render() {
		const {children} = this.props;
		const {isAuthorized} = this.state;

		return (
            <Provider
	            value={{ isAuthorized, authorizeUser: this.authorizeUser }}
            >
                <Link to="/public" className="link">Public</Link>{''}
                <Link to="/private" className="link">Private</Link>{''}
                <Link to="/login" className="link">Login</Link>

                <hr />

                <Switch>
                    <Route
                        path="/public"
                        render = {()=> <h1>Public</h1>}
                    />
	                <Route
		                path="/login"
		                component = { LoginPage }
	                />
	                <PrivateRoute
		                path="/private"
	                    component = { ()=>  <h1>Private</h1>}
	                />
                </Switch>
            </Provider>
		);
	}
}

const LoginPage = () => (
	<Consumer>
		{({ isAuthorized, authorizeUser }) =>
			isAuthorized? (
				<Redirect to="/private" />
			): (
				<div classname="form-group">
					<input type="text" placeholder="Логин" />
					<input type="text" placeholder="Пароль" />

					<button className="button-auth"
					        onClick={ authorizeUser }
					> Авторизироваться
					</button>
				</div>
			)
		}
	</Consumer>
);

const PrivateRoute = ({
	component: Component,
	...rest
}) => (
	<Consumer>
		{({ isAuthorized }) => (
			<Route
				{...rest }
				render = {props =>
					isAuthorized? (
						<Component {...props} />
					): (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: props.location},
							}}
						/>
					)
				}
			/>
		)}
	</Consumer>
);

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
