import { Meteor } from 'meteor/meteor'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { onPageLoad } from 'meteor/server-render'
import { Helmet } from 'react-helmet'
import { addPublications, addMethods } from '../../app/utils'
import { App } from '/app/components/App'

import * as publications from '/app/api/publications'
import * as methods from '/app/api/methods'

addPublications(publications)
addMethods(methods)

onPageLoad((sink) => {
	const helmet = Helmet.renderStatic()
	sink.renderIntoElementById('app', renderToString(<App location={sink.request.url}/>))
	sink.appendToHead(helmet.meta.toString())
	sink.appendToHead(helmet.title.toString())
	sink.appendToHead(helmet.link.toString())
	sink.appendToHead(helmet.script.toString())
})

import '/app/server.js'