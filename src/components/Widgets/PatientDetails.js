/**
 * New Emails Widget
 */
import React, { Component, Fragment } from 'react';
import { Media } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import update from 'react-addons-update';
import { Scrollbars } from 'react-custom-scrollbars';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router-dom';
import { Fab } from '@material-ui/core';


// api
import api from 'Api';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
class NewEmails extends Component {

   state = {
      sectionReload: false,
      newEmails: null,
      openConfirmationAlert: false,
      selectedDeletedEmail: null,
      snackbar: false,
      snackbarMessage: '',
      replyTextBox: false,
      selectedEmail: null,
      viewEmailDialog: false
   }

   componentDidMount() {
      api.get('newEmails.js')
         .then((response) => {
            this.setState({ newEmails: response.data });
         })
         .catch(error => {
            console.log(error);
         })
   }

   // on delete email open confirmation
   onDeleteEmail(email) {
      this.setState({ openConfirmationAlert: true, selectedDeletedEmail: email });
   }

   // close confirmation dailog
   handleCloseConfirmationAlert = () => {
      this.setState({ openConfirmationAlert: false, viewEmailDialog: false });
   }

   // delete email if confirmation true
   deleteEmail() {
      this.setState({ openConfirmationAlert: false, sectionReload: true });
      let emails = this.state.newEmails;
      let deletedEmailIndex = emails.indexOf(this.state.selectedDeletedEmail);
      emails.splice(deletedEmailIndex, 1);
      let self = this;
      setTimeout(() => {
         self.setState({ sectionReload: false, newEmails: emails, snackbar: true, snackbarMessage: 'Email Deleted Successfully!' });
      }, 1500);
   }

   // show reply text box
   showReplyTextBox(email) {
      let indexOfEmail = this.state.newEmails.indexOf(email);
      this.setState({
         newEmails: update(this.state.newEmails,
            {
               [indexOfEmail]: {
                  replyTextBox: { $set: true }
               }
            }
         )
      });
   }

   // reply email
   replyEmail(email) {
      let indexOfEmail = this.state.newEmails.indexOf(email);
      this.setState({ sectionReload: true });
      this.setState({
         newEmails: update(this.state.newEmails,
            {
               [indexOfEmail]: {
                  replyTextBox: { $set: false }
               }
            }
         )
      });
      let self = this;
      setTimeout(() => {
         self.setState({ sectionReload: false, snackbar: true, snackbarMessage: 'Reply Sent Successfully!' });
      }, 1500);
   }

   /**
    * On View Email
    */
   onViewEmal(email) {
      this.setState({ selectedEmail: email, viewEmailDialog: true });
   }

   render() {
      const { newEmails, selectedEmail, sectionReload } = this.state;
      return (
         <Fragment>
            {sectionReload &&
               <RctSectionLoader />
            }
            <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={400} autoHide>
               <ul className="new-mail mb-0 list-unstyled rct-block">
                  {newEmails && newEmails.map((email, key) => (
                     <li key={key}>
                        <div className="d-flex justify-content-between ">
                           <Media className="mb-10">
                              {email.sender_avatar === '' ?
                                 <Avatar className="mr-15">{email.sender_name.charAt(0)}</Avatar>
                                 : <Media object src={email.sender_avatar} alt="User Profile 1" className="mr-15"  width="80" height="80" />
                              }
                              <Media body>
                                 <h5 className="m-0 pt-5 fs-14">{email.sender_name}</h5>
                                 <span className="fs-12 align-self-center">Cold, Fever</span>
                                 <div className="fs-12 align-self-center">19 Mar 2017 3.30 PM</div>
                              </Media>
                           </Media>
                           <Media className="mb-10">
                              <Media body>
                                <h5 className="m-0 pt-5 fs-14">&nbsp;</h5>
                                <span className="fs-12 align-self-center">&nbsp;</span>
                                  <span className="fs-12 align-self-center">&nbsp;</span>
                                 <div className="fs-13 align-self-center reschedule">RESCHEDULE</div>
                              </Media>
                           </Media>
                           <Media className="mb-10">
                              <Media body>
                              <h5 className="m-0 pt-5 fs-14">&nbsp;</h5>
                              <span className="fs-12 align-self-center"><span aria-hidden="true" className="ti-video-clapper"></span></span>
                                 <div className="fs-13 align-self-center startVideo">START</div>
                              </Media>
                           </Media>
                        </div>
                     </li>

                  ))}
               </ul>
            </Scrollbars>

            <Snackbar
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
               open={this.state.snackbar}
               onClose={() => this.setState({ snackbar: false })}
               autoHideDuration={2000}
               snackbarcontentprops={{
                  'aria-describedby': 'message-id',
               }}
               message={<span id="message-id">{this.state.snackbarMessage}</span>}
            />
         </Fragment>
      );
   }
}

export default withRouter(NewEmails);
