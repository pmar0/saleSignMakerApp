const StepCounter = (props) => {
    const { stepArray, currentStep, square, error } = props

    return(
        <div className='step-counter'>
            <ul>
                {
                    stepArray.map((item,index) => (
                        <li
                        key={index}
                        className={
                            'step' +
                            (currentStep===index?' active':'') +
                            (currentStep+1===index && error?' partial':'') +
                            (currentStep>index?' complete':'') +
                            (square?' square':'')
                            }
                        >
                            <div className='checkmark-container'>
                                <svg x="0px" y="0px" className="checkmark-svg" viewBox="0 0 25 30">
                                    <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                                </svg>
                            </div>
                            {
                                index !=0
                                    ?<span className="step-connector-line"></span>
                                    :null
                            }
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default StepCounter;