import React, { Component } from 'react';
import './AppRouter.css'
import { Switch, Route } from 'react-router-dom'

import Search from '../Search'
import ShowPreview from '../ShowPreview'
import ShowPage from '../ShowPage'

class AppRouter extends Component {

	renderSearch = () => {
		return (
			<div>
				<Search />
				<ShowPreview />
			</div>
		)
	}

	render() {
		const { renderSearch } = this

		return (
			<div className="App">
				<Switch>
					<Route exact  path='/' component={() => renderSearch() } />
					<Route path='/shows/:id' component={ShowPage} />
				</Switch>
			</div>
		)
	}
}

export default AppRouter;
