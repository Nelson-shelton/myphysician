/**
 * Agency Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

//Widgets
import {


   NewCustomersWidget,
   PersonalSchedule

} from "Components/Widgets";

// widgets data
import {
   totalEarns
} from './data';


export default class AgencyDashboard extends Component {
   render() {
      return (
         <div className="agency-dashboard-wrapper">
            <Helmet>
               <title>Agency Dashboard</title>
               <meta name="description" content="Reactify Agency Dashboard" />
            </Helmet>

            <RctCollapsibleCard
               heading={<IntlMessages id="widgets.totalEarns" />}
               collapsible
               reloadable
               closeable
            >

            </RctCollapsibleCard>

            <div className="row">
            
               <RctCollapsibleCard
                  colClasses="col-sm-12 col-md-5 col-xl-5 b-100 w-xs-full"
                  heading={<IntlMessages id="widgets.employeePayroll" />}
                  collapsible
                  reloadable
                  closeable
                  fullBlock
               >


               </RctCollapsibleCard>
            </div>
         </div>
      )
   }
}
