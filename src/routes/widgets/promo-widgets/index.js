/**
 * Promo Widgets Page
 */
import React, { Component } from 'react';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// widgets


// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class UserWidgets extends Component {
	render() {
		return (
			<div className="promo-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.promo" />} match={this.props.match} />
	 
			</div>
		);
	}
}
