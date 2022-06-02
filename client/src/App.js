import React, {useEffect, useState} from 'react';
import StepCounter from "./components/StepCounter";
import ArrowButton from './components/ArrowButton';

const stepArray = ['step 1', 'step 2', 'step 3']

function App() {
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const isFinalStep = step === stepArray.length - 1
  const isFirstStep = step === 0

  const nextStep = () => {
    if (step + 1 < stepArray.length) {
      //want to set the error to something if I receive an error from backend
      //then properly step forward if there is no error
      // if(true)
      // {
      //   setError('ahh')
      // }
      // else{
        // setError('')
      setStep(step+1)
      // }
    }
    if (isFinalStep) {
      alert('you did it yey')
    }
  }

  const lastStep = () => {
    if (step - 1 >= 0) {
      setStep(step-1)
    }
  }

  return (
    <div className="flex">
      <h1 style={{marginBottom: 0}}>TEST</h1>
      <StepCounter
        stepArray={stepArray}
        currentStep={step}
        error={error}
        //square
      />
      <div>
        <ArrowButton disabled={isFirstStep} onClick={lastStep}>Back</ArrowButton>
        <ArrowButton onClick={nextStep}>{isFinalStep?'Finish':'Next'}</ArrowButton>
      </div>
    </div>
  );
}

export default App;
