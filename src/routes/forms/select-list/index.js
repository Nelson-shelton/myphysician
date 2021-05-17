/**
 * Select List
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

 import VertStapper from '../../dashboard/patientDetails/component/VertStapperTest.js';
 import Toolbar from '@material-ui/core/Toolbar';
 import { Link } from 'react-router-dom';
 import { Label } from 'reactstrap';
// page title bar
import MultiSelect from './components/multiselect';
import TextField from '@material-ui/core/TextField';

import {
	PatientInfo
} from "Components/Widgets";

export default class SimpleSelect extends React.Component {

  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="ecom-dashboard-wrapper">

				<Helmet>
					<title>General Exam</title>
					<meta name="description" content="Reactify Dashboard" />
				</Helmet>
				<div class="row">
					<div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
					<RctCollapsibleCard
				 >
					 <VertStapper />
				 </RctCollapsibleCard>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 fullBlock">
          <div class="row">

            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div>
              <MultiSelect />
            </div>
            <div>
                <TextField id="name" fullWidth label="Height in Inches"   value='5.4'   />
            </div>
            <div>
                <TextField id="name" fullWidth label="Pulse"   value='XXXX'   />
            </div>
            <div>
                <TextField id="name" fullWidth label="B P Systolic"   value='XXXX'   />
            </div>
            <div>
                <TextField id="name" fullWidth label="Glucose Random"   value='XXXX'   />
            </div>
            <div>
                <TextField id="name" fullWidth label="Glucose Post Prandial"   value='XXXX'   />
            </div>
            <div>
              <MultiSelect />
            </div>
           </div>
           <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div>
              <TextField id="name" fullWidth    value='comments'   />
            </div>
            <div>
               <TextField id="name" fullWidth  label="weight in Kgs"  value='62'   />
             </div>
             <div>
                <TextField id="name" fullWidth label="Temperature"  value='XXXX'   />
              </div>
              <div>
                 <TextField id="name" fullWidth label="B P Diastolic"  value='XXXX'    />
               </div>
               <div>
                  <TextField id="name" fullWidth  label="Glucose Fasting"  value='XXXX'    />
                </div>
                <div>
                   <TextField id="name" fullWidth  label="Eyes"  value='XXXX'    />
                 </div>
                 <div>
                    <TextField id="name" fullWidth    value='Comments'    />
                  </div>
           </div>

					</div>
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
    );
  }
}
