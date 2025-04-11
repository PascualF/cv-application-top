import trashIcon from "../assets/trash-icon.svg";

function ButtonErase(props){

    return (
        <div>
            <button
                onClick={() => props.onDelete(props.index, props.type)}>
                <img src={trashIcon} alt="icon-trash"/>
            </button>
        </div>
    )
}

export default ButtonErase;