import React, { useMemo, useState } from 'react';
import StepCounter from "./components/StepCounter";
import ArrowButton from './components/ArrowButton';
import DragFileUpload from './components/DragFileUpload';

const stepArray = ['step 1', 'step 2', 'step 3']

function App() {
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const isFinalStep = useMemo(() => step === stepArray.length - 1, [step]) //this isn't really needed here, as it isn't expensive, but I want to see how it works ¯\_(ツ)_/¯
  const isFirstStep = useMemo(() => step === 0, [step]) //same as above

  const nextStep = () => {
    if (step + 1 < stepArray.length) {
      //want to set the error to something if I receive an error from backend
      //then properly step forward if there is no error
      // if(true)
      // {
      //   setError('ahh')
      // }
      // else{
      //   setError('')
      setStep(step+1)
      // }
    }
    else if (isFinalStep) {
      alert('you did it yey')
    }
  }

  const prevStep = () => {
    if (step - 1 >= 0) {
      setStep(step-1)
    }
    setError('')
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
      <DragFileUpload/>
      <div>
        <ArrowButton disabled={isFirstStep && !error} onClick={prevStep}>Back</ArrowButton>
        <ArrowButton onClick={nextStep}>{isFinalStep?'Finish':'Next'}</ArrowButton>
      </div>
    </div>
  );
}

export default App;
