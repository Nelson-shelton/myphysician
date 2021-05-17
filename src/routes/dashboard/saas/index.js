/**
 * Agency Dashboard
 */
import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// intl messages
import IntlMessages from 'Util/IntlMessages';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';


// widgets data
import {
	trafficStatus,
	totalSales,
	netProfit,
	expenses,
	taxStats
} from './data';

export default class saasDashbaord extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="saas-dashboard">
				<Helmet>
					<title>Sass Dashboard</title>
					<meta name="description" content="Reactify Sass Dashboard" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.saas" />} match={match} />
				 
			</div>
		)
	}
}
