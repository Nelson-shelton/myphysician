/**
 * Reports Page
*/
/* eslint-disable */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
// rct card box
import { RctCard, RctCardHeading, RctCardContent } from 'Components/RctCard';
// intl messages
import IntlMessages from 'Util/IntlMessages';

// widgets data

export default class Reports extends Component {
   render() {
      return (
         <div className="blank-wrapper">
            <Helmet>
               <title>Reports</title>
               <meta name="description" content="Reactify Blank Page" />
            </Helmet>
            <PageTitleBar title={<IntlMessages id="sidebar.reports" />} match={this.props.match} />
          </div>
      );
   }
}
