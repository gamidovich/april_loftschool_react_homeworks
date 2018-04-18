import React, { Component } from 'react';
import './AppRouter.css'
import { Switch, Route } from 'react-router-dom'


import Search from '../Search'

class AppRouter extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exec path='/' component={Search} />
				</Switch>
			</div>
		)
	}
}

export default AppRouter;
