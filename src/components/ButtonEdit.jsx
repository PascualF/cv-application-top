import editIcon from "../assets/edit-icon.svg";

function ButtonEdit(props){
    return (
        <div>
            <button
                onClick={() => props.onEdit(props.index, props.type)}
            ><img src={editIcon} alt="icon-edit"/></button>
        </div>
    )
}

export default ButtonEdit;