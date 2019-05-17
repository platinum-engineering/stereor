import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

export const Home = ({}) => {
	return (
		<>
			<Helmet>
				<title>STEREOR — Meteor On Steroids</title>
			</Helmet>
			<div className="container">
				<div>
					<div className="stereor-heading-welcome center">STEREOR</div>
					<p className="center">
						<em>Clear application structure and tools for your next Meteor project</em>
					</p>
				</div>
				<div className="grid">
					<div className="cell-25 cell-t-50 cell-p-100">
						<h4>Server Side Rendering</h4>
					</div>
					<div className="cell-25 cell-t-50 cell-p-100">
						<h4>REST API</h4>
					</div>
					<div className="cell-25 cell-t-50 cell-p-100">
						<h4>Security</h4>
					</div>
					<div className="cell-25 cell-t-50 cell-p-100">
						<h4>Batteries Included</h4>
						<ul>
							<li>Form</li>
							<li>List</li>
							<li>View</li>
							<li>Authentication</li>
							<li>Source Of Truth</li>
							<li>WebStorm Config</li>
							<li>File Structure</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

Home.propTypes = {}

Home.defaultProps = {}

