/*====== Vertical Stapper =====*/
import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function getSteps() {
   return ['General Exam','History','Review of Systems','Physical Exam','Labs', 'Medications', 'Assessment & Plan'];
}

function getStepContent(step) {
   switch (step) {
      case 0:
          return `Nelson`;
      case 1:
         return `Family History   Social History  Pre-Existing Conditions Past Medical History Past Surgeries Obgyn History Onconlogy History`;
      case 2:
         return `ROS-A ROS-B ROS-c ROS-D `;
      case 3:
        return `Set-1 Set-2 Set-3 Set-4 Set-5`;
        case 3:
        return `Lab Orders Blood Reports Urine Reports X-RAY Reports EKG/ECG Reports`;
      default:
         return 'Unknown step';
   }
}

export default class VerticalLinearStepper extends React.Component {
   state = {
      activeStep: 0,
   };

   handleNext = (indexValue) => {
     console.log("11111111111111111111");
      this.setState({
         activeStep: this.state.activeStep + 1,
      });
   };

   handleBack = () => {
      this.setState({
         activeStep: this.state.activeStep - 1,
      });
   };

   handleReset = () => {
      this.setState({
         activeStep: 0,
      });
   };

   render() {
      const steps = getSteps();
      const { activeStep } = this.state;

      return (
         <div>
            <Stepper activeStep={activeStep} orientation="vertical">
               {steps.map((label, index) => {
                  return (
                     <Step key={label}>
                        <StepLabel onClick={this.handleNext}>{label}</StepLabel>
                        <StepContent>
                           <p>{getStepContent(index)}</p>
                           <div> 
                           </div>
                        </StepContent>
                     </Step>
                  );
               })}
            </Stepper>

         </div>
      );
   }
}
