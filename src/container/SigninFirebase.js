/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';

// components
import {
   SessionSlider
} from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
} from 'Actions';

//Auth File
import Auth from '../Auth/Auth';
import { Fab } from '@material-ui/core';

const auth = new Auth();

class Signin extends Component {

   state = {
      email: 'demo@example.com',
      password: 'test#123'
   }

	/**
	 * On User Login
	 */
   onUserLogin() {
      if (this.state.email !== '' && this.state.password !== '') {
        console.log("-9999999999999", this.props.history);
         this.props.signinUserInFirebase(this.state, this.props.history);
      }
   }

	/**
	 * On User Sign Up
	 */
   onUserSignUp() {
      this.props.history.push('/signup');
   }

   //Auth0 Login
   loginAuth0() {
      auth.login();
   }

   render() {
      const { email, password } = this.state;
      const { loading } = this.props;
      return (
         <QueueAnim type="bottom"  >
            <div className="rct-session-wrapper">
               {loading &&
                  <LinearProgress />
               }
               <div className="session-inner-wrapper">
                  <div className="container">
                     <div className="row row-eq-height">
                     <div className="col-sm-3 col-md-3 col-lg-3" >
                     </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 loginbox">
                           <div className="session-body text-center">
                              <div className="session-head mb-30">
                              <Link to="/">
                                 <img src={AppConfig.appsLogo} alt="session-logo" className="img-fluid"   />
                              </Link>
                                 <h2 className="font-weight-bold"></h2>

                              </div>
                              <Form>
                                 <FormGroup className="has-wrapper">
                                    <Input
                                       type="mail"
                                       value={email}
                                       name="user-mail"
                                       id="user-mail"
                                       className="has-input input-lg"
                                       placeholder="Enter Email Address"
                                       onChange={(event) => this.setState({ email: event.target.value })}
                                    />
                                    <span className="has-icon"><i className="ti-email"></i></span>
                                 </FormGroup>
                                 <FormGroup className="has-wrapper">
                                    <Input
                                       value={password}
                                       type="Password"
                                       name="user-pwd"
                                       id="pwd"
                                       className="has-input input-lg"
                                       placeholder="Password"
                                       onChange={(event) => this.setState({ password: event.target.value })}
                                    />
                                    <span className="has-icon"><i className="ti-lock"></i></span>
                                 </FormGroup>
                                 <FormGroup className="mb-15">
                                    <Button
                                       color="primary"
                                       className="btn-block text-white w-100"
                                       variant="contained"
                                       size="large"
                                       onClick={() => this.onUserLogin()}
                                    >
                                       LOG IN
                            			</Button>
                                 </FormGroup>
                              </Form>
                              <p className="mb-0"><a target="_blank" href="#/terms-condition" className="text-muted">Terms and Conditions of Use</a></p>
                              <p className="mb-0"><a target="_blank" href="#/terms-condition" className="text-muted">Privacy Statement</a></p>
                           </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3" >
                        </div>


                     </div>
                  </div>
               </div>
            </div>
         </QueueAnim>
      );
   }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user, loading } = authUser;
   return { user, loading }
}

export default connect(mapStateToProps, {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
})(Signin);
