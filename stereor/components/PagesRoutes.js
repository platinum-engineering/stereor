import React from 'react'
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom'
import routes from '/app/pages'

const Router = Meteor.isServer ? StaticRouter : BrowserRouter
const _routes = Object.keys(routes)

const PagesRoutes = props => {
	return (
		<Router location={props.location}>
			{_routes.map((route, i) => <Route path={route} exact component={routes[route]} key={i} />)}
		</Router>
	)
}

export { PagesRoutes }