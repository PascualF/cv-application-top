// Just discovered you can pass props or the variables directly.
function ConfirmationModal({message = "Sure?", onConfirm, onCancel}){

    return (
        <div className="modal-confirmation">
            <div className="modal-box">
                <p>{message}</p>
                <div className="modal-btns">
                    <button onClick={onConfirm} className="confirmBtn">Yes</button>
                    <button onClick={onCancel} className="cancelBtn">No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal;