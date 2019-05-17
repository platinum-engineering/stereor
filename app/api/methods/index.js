import { ServerRestartings } from '../collections'
import { Method } from '../../utils'

export const registerServerRestarting = new Method(function() {
	ServerRestartings.insert({createdAt: new Date()})
})