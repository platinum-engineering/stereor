import * as collections from '/app/api/collections'
import { Publication } from '../../utils'

export const magic = new Publication(function(collectionName, qry = {}) {
	const query = {
		...qry,
		$or: [
			{_user: Meteor.userId()},
			{_user: {$exists: false}}
		]
	}
	return collections[collectionName].find(query)
})