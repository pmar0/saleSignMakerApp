import React, {useEffect, useState} from 'react';
import StepCounter from "./components/StepCounter";

function App() {
  const [step, setStep] = useState(0)
  return (
    <div className="flex">
      <StepCounter
        stepArray={['step 1', 'step 2', 'step 3']}
        currentStep={step}
        // square
      />
    </div>
  );
}

export default App;
