import React from 'react'

export const mapItems = (data, Com) => {
	check(data, Array)
	return data.map((item, key) => <Com {...item} key={key}/>)
}