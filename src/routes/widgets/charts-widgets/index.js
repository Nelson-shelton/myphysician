/**
 * Charts Widgets Page
 */
import React, { Component } from 'react';


// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class ChartsWidgets extends Component {
	render() {
		return (
			<div className="charts-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.charts" />} match={this.props.match} />


			</div>
		);
	}
}
