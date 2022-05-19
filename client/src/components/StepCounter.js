import React, {useEffect, useState} from 'react';

const StepCounter = (props) => {
    const { stepArray, currentStep, square } = props

    return(
        <div className='step-counter'>
            <h1>TEST</h1>
            <ul>
                {
                    stepArray.map((item,index) => (
                        <li
                        key={index}
                        className={
                            'step' +
                            (currentStep===index?' active':'') +
                            (square?' square':'')
                            }
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default StepCounter;