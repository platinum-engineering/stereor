import {call} from './utils'

Meteor.startup(() => {
	call('registerServerRestarting')
})

