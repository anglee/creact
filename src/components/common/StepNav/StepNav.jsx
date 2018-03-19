import { Steps } from "antd";
import React from "react";

const Step = Steps.Step;

const StepNav = ({ currentStep = 0 }) => (
  <Steps current={currentStep}>
    <Step title="Company Info" description="This is a description." />
    <Step title="Plan Info" description="This is a description." />
    <Step title="Financial Info" description="This is a description." />
    <Step title="Review" description="This is a description." />
    <Step title="Payment" description="This is a description." />
  </Steps>
);

export default StepNav;
