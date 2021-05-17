/*====== Vertical Stapper =====*/
import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function getSteps() {
   return ['28 Aug,2017','29 Aug,2017','30 Aug,2017','01 Sep,2017','02 Sep,2017'];
}

function getStepContent(step) {
   switch (step) {
      case 0:
          return `Nelson`;
      case 1:
         return `Shelton`;
      case 2:
         return `Aravindaraj`;
      case 3:
        return `Testing`;
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

                    <Button variant="contained" color="primary" className="text-white mr-10 mb-10" onClick={this.handleNext}>
                       {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
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
