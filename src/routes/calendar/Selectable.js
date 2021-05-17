/**
 * Selectable Calendar
 */
import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { Link } from 'react-router-dom';

// events
import events from './events';
import VertStapper from '../dashboard/patientDetails/component/VertStapper.js';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Toolbar from '@material-ui/core/Toolbar';
import {
	PatientInfo
} from "Components/Widgets";

const Localizer = momentLocalizer(moment);

let Selectable = ({ match }) => (
	<div className="calendar-wrapper">

	<div className="rct-header2">
	  <Toolbar className="d-flex justify-content-between w-100 pl-0">
	  <div className="list-inline-item">Calender</div>
	  <div className="list-inline-item"> </div>
	  <div className="list-inline-item"> </div>
	  <div className="list-inline-item"> </div>
	  <div className="list-inline-item"> </div>
	  <div className="list-inline-item"> </div>
	  <div className="list-inline-item"><Link to="/app/dashboard/patientDetails" ><span aria-hidden="true" className="ti-calendar"></span> Dashboard View</Link></div>
	  </Toolbar>
	</div>

	  <div class="row">
	    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
	    <RctCollapsibleCard
	   >
	   Calender
	   </RctCollapsibleCard>
	    </div>
	    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">

	      <RctCollapsibleCard
	        fullBlock
	      >
				<Calendar
				 localizer={Localizer}
				 selectable
				 events={events}
				 defaultView="week"
				 scrollToTime={new Date(1970, 1, 1, 6)}
				 defaultDate={new Date(2015, 3, 12)}
				 onSelectEvent={event => alert(event.title)}
				 onSelectSlot={slotInfo =>
					 alert(
						 `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
						 `\nend: ${slotInfo.end.toLocaleString()}` +
						 `\naction: ${slotInfo.action}`
					 )
				 }
			 />
	      </RctCollapsibleCard>

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

export default Selectable
