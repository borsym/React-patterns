import React, { useState } from 'react';
import { UncontrolledModal } from './modal/UncontrolledModal';
import { ControlledOnboardingFlow } from './onboardingboard/ControlledOnboardingFlow';
import { UncontrolledOnBoardingFlow } from './onboardingboard/UncontrolledOnBoardingFlow';

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: 'Mate' })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 32 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Cg quilify</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
  </>
);

export const ForOnboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState({});

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    // <UncontrolledOnBoardingFlow
    //   onFinish={(data) => {
    //     console.log(data);
    //     console.log('vege');
    //   }}
    // >
    //   <StepOne />
    //   <StepTwo />
    //   <StepThree />
    // </UncontrolledOnBoardingFlow>
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onboardingData.age > 72 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
};
