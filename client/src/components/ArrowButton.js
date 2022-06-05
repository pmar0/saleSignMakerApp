import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const ArrowButton = (props) => {
    const { children, onClick, disabled } = props
    const isLoading = false

    return(
        <button
        className="arrowButton"
        onClick={() => onClick()}
        disabled={disabled || isLoading}
        >
            <div className="chevron-container">
            {
                !isLoading?
                    <ChevronLeftIcon className={"chevron" + (children.toLowerCase() === "back"?" prev":" next")} />
                :<div className={"loader button" + (children.toLowerCase() === "back"?" prev":" next")}></div>
            }
            </div>
            {children}
        </button>
    );
};

export default ArrowButton;