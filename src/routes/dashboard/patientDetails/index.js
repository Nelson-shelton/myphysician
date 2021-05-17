/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// intl messages
import IntlMessages from 'Util/IntlMessages';
import Button from '@material-ui/core/Button';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import VertStapper from './component/VertStapper.js';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';
import {
 	PatientDetailsWidget,
	PatientInfo
} from "Components/Widgets";

export default class EcommerceDashboard extends Component {
	render() {
		const { match } = this.props;
		return (

			<div className="ecom-dashboard-wrapper">
			<div className="rct-header1">
				<Toolbar className="d-flex justify-content-between w-100 pl-0">
				<ul className="list-inline mb-0 navbar-left">
				<li className="list-inline-item">
					 <Label for="firstName" sm={3}><IntlMessages id="health.appointments" /></Label>
				</li>
				<li className="list-inline-item">
					 <Button className="text-secondary mr-10 mb-10"><IntlMessages id="health.today" /></Button>
				</li>
				<li className="list-inline-item">
				<span aria-hidden="true" className="ti-angle-left"></span>
				</li>
				<li className="list-inline-item">
					 <span aria-hidden="true" className="ti-angle-right"></span>
				</li>
				<li className="list-inline-item">
					 Tuesday 29 Aug,2017
				</li>
				<li className="list-inline-item">
					 <Button className="text-secondary mr-10 mb-10"><IntlMessages id="health.day" /></Button>
					 <Button className="text-secondary mr-10 mb-10"><IntlMessages id="health.week" /></Button>
					 <Button className="text-secondary mr-10 mb-10"><IntlMessages id="health.month" /></Button>
				</li>

				<li className="list-inline-item">
				<Link to="/app/calendar/selectable" ><span aria-hidden="true" className="ti-calendar"></span>&nbsp;&nbsp;&nbsp; <IntlMessages id="health.calenderView" /></Link>

				</li>


				</ul>

				</Toolbar>
			</div>
			<div className="rct-header2">
				<Toolbar className="d-flex justify-content-between w-100 pl-0">
				<div className="list-inline-item">Total - 150</div>
				<div className="list-inline-item">Completed - XX</div>
				<div className="list-inline-item">Finished Chart -XX</div>
				<div className="list-inline-item">Review Reports - XX</div>
				<div className="list-inline-item">Refferals Outward -XX</div>
				<div className="list-inline-item">Refferals Inward -XX</div>
				<div className="list-inline-item">No Show - XX</div>
				</Toolbar>
			</div>
				<Helmet>
					<title>Dashboard</title>
					<meta name="description" content="Reactify Dashboard" />
				</Helmet>
				<div class="row">
					<div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
					<RctCollapsibleCard
				 >
					 <VertStapper />
				 </RctCollapsibleCard>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
						<PatientDetailsWidget />
					</div>
					<div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
					<RctCollapsibleCard
						fullBlock
					>
						<PatientInfo />
					</RctCollapsibleCard>
					</div>
				</div>




			</div>
		)
	}
}
