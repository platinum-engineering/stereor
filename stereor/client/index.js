import React from 'react'
import { Meteor } from 'meteor/meteor'
import { hydrate } from 'react-dom'
import { AppTracker } from '/app/components/App'

Meteor.startup(() => {
	hydrate(<AppTracker />, document.getElementById('app'))
})
