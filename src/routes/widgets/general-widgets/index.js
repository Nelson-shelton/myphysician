/**
 * Miscellaneous Widgets Page
 */
import React, { Component } from 'react';



// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import {
	spaceUsed
} from '../data';

export default class GeneralWidgets extends Component {
	render() {
		return (
			<div className="general-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.general" />} match={this.props.match} />
			</div>
		);
	}
}
