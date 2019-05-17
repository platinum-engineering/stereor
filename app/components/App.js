import React from 'react'
import { PagesRoutes } from '/stereor/components/PagesRoutes'
import { getWithTracker, subscribe, userId } from '../utils'
import { Helmet } from 'react-helmet'

const App = ({ location }) => {
	return (
		<>
			<Helmet>
				<meta name="description" content="Boiler plate for the Meteor/React applications"/>
				<meta name="keywords" content="Meteor, React, SSR"/>
				<meta name="author" content="Rus Inozemtsev"/>
				<meta name="author" content="Dasha Evstegneeva"/>

				<link rel="stylesheet" href="https://defaults.website/1.0.6/index.css"/>
				<link rel="stylesheet" href="/dev/index.css"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</Helmet>
			<PagesRoutes/>
		</>
	)
}

const AppTracker = getWithTracker(() => {
	return {
		userId: userId(),
	}
})(App)

export { App, AppTracker }
