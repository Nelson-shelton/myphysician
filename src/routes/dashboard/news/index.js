/**
 * News Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';





export default class NewsDashboard extends Component {
	render() {
		return (
			<div className="news-dashboard-wrapper">
				<Helmet>
					<title>News Dashboard</title>
					<meta name="description" content="Reactify News Dashboard" />
				</Helmet>
			 
			</div>
		)
	}
}
