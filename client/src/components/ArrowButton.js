const ArrowButton = (props) => {
    const { children, onClick, type, disabled } = props
    console.log(children[0])
    return(
        <button
        className="arrowButton"
        onClick={() => onClick()}
        disabled={disabled}
        >
            {children.toLowerCase() === 'back'?
                <div className="chevron-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="chevron prev" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                :null
            }
            {children}
            {children.toLowerCase() === 'next'?
                <div className="chevron-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="chevron next" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                :null
            }
        </button>
    );
};

export default ArrowButton;