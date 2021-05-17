/**
 * User Widgets Page
 */
import React, { Component } from 'react';

import {
	ActivityBoard
} from "Components/Widgets";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';


export default class UserWidgets extends Component {
	render() {
		return (
			<div className="user-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.user" />} match={this.props.match} />
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
						fullBlock
						customClasses="overflow-hidden"
					>
						</RctCollapsibleCard>
				</div>
			</div>
		);
	}
}
