/**
 * Agency Menu
 */
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';

//Intl Meassages
import IntlMessages from 'Util/IntlMessages';

import navLinks from './NavLinks';
import NavMenuItem from './NavMenuItem';
import Sidebar from 'Components/Sidebar';

//Component
import SearchForm from 'Components/Header/SearchForm';
import MobileSearchForm from 'Components/Header/MobileSearchForm';

class AgencyMenu extends Component {

	state = {
		isMobileSearchFormVisible: false,
		mobileMenu: false
	}

	// mobile search form
	openMobileSearchForm() {
		this.setState({ isMobileSearchFormVisible: true });
	}

	render() {
		const { isMobileSearchFormVisible, mobileMenu } = this.state;
		return (
			<div className="horizontal-menu agency-menu justify-content-between align-items-center">
		 
				<IconButton className="hamburger-icon" color="inherit" aria-label="Menu" onClick={() => this.setState({ mobileMenu: true })}>
					<MenuIcon />
				</IconButton>
				<div className="search-icon">
					<SearchForm />
					<IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
						<i className="zmdi zmdi-search"></i>
					</IconButton>
					<MobileSearchForm
						isOpen={isMobileSearchFormVisible}
						onClose={() => this.setState({ isMobileSearchFormVisible: false })}
					/>
					<Drawer open={mobileMenu} onClose={() => this.setState({ mobileMenu: false })}>
						<Sidebar agencySidebar />
					</Drawer>
				</div>
			</div>
		);
	}
}
export default withRouter(AgencyMenu);
