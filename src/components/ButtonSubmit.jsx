function ButtonSubmit(props){
    return (
        <div>
            <button 
                className="button-confirm" 
                onClick={props.onClick}
                disabled={props.isDisabled}
            >
                {props.isSubmitted}
            </button>
        </div>
    )
}

export default ButtonSubmit;