import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Tracker } from 'meteor/tracker'

export class Collection extends Mongo.Collection {
	constructor(name, schema = {}, initialData = []) {
		super(name)
		this.attachSchema(schema)
		importData(this, initialData)
	}
}

export class Method {
	constructor(func, schema = {}, opts = {}) {
		this.func = func
		this.schema = schema
		this.opts = opts
	}
}

export class Publication {
	constructor(func, schema = {}, opts = {}) {
		this.func = func
		this.schema = schema
		this.opts = opts
	}
}

export const getWithTracker = Meteor.isServer
	? props => com => com
	: withTracker

export const getObjectId = () => new Mongo.ObjectID()._str

export const subscribe = (...args) => {
	if (Meteor.isServer) {
		return
	}
	return Meteor.subscribe.apply(null, args)
}

export const call = function(...args) {
	return new Promise((resolve, reject) =>
		Meteor.apply(args.shift(), args, (err, res) =>
			err ? reject(err) : resolve(res),
		),
	)
}

export const addPublications = (publications) => {
	Object.keys(publications).forEach(name => {
		console.log(name)
		Meteor.publish(name, publications[name].func)
	})
}

export const addMethods = (methods) => {
	if (methods.default) {
		return
	}
	const names = Object.keys(methods)
	names.forEach(name => {
		Meteor.methods({
			[name]: methods[name].func,
		})
	})
}

export const importData = (collection, data = [], mutator = element => element) => {
	if (data.length === 0) {
		return
	}
	if (data[0] && !data[0]._id) {
		collection.remove({})
	}
	data.forEach(record => collection.upsert(
		{ _id: record._id },
		{ $set: mutator(record) },
	))
}


export const createAnonymousUser = () => {
	if (Meteor.isServer) {
		return
	}
	const tracker = Tracker.autorun(() => {
		if (Meteor.userId() === null) {
			const username = getObjectId()
			Accounts.createUser({
				username: username,
				password: username,
			})
		} else {
			console.log('user id', Meteor.userId())
		}
	})
}

export const userId = () => Meteor.userId()