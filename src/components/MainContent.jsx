import { useState } from "react";
import ButtonErase from "./ButtonErase";
import ButtonEdit from "./ButtonEdit"
import ConfirmationModal from "./ConfirmationModal";

function MainContent(props){

    // To hide and show the modal, and to update the list to 
    const [showModal, setShowModal] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState({
        index: null,
        type: ""
    })

    // Pressing the Edit button will trigger this useState
    // No need for those
/*     const [editTarget, setEditTarget] = useState({
        index: null,
        type: ""
    }) */

    //console.log(editTarget)

    // This will handle delete, and will activate.
    const handleDelete = (index, type) => {
        setDeleteTarget({
            index, 
            type
        })
        setShowModal(true)    
    }

    const handleEdit = (index, type) => {
        props.onEditItem(index, type)
    }

    const displayItemsList = (arr, info) => {
        if(!Array.isArray(arr)) return;

        return (arr.map((item, index) => (
            <div key={index} className="container-content-work-school">
                <div className={`${info}-item`}>
                    <p><strong>{info === "work" ? "Company:" : "School:"}</strong> {item.company ? item.company : item.school}</p>
                    <p><strong>{info === "work" ? "Role:" : "Course:"}</strong> {item.role ? item.role : item.course}</p>
                    <p><strong>From:</strong> {item.dateFrom} <strong>To:</strong> {item.dateTo}</p>
                </div>
                {info === "work" && 
                    <div className="text-area-content">
                        <p>{item.description}</p>
                    </div> 
                }
                
                <div className="container-button">
                    <ButtonEdit 
                        index={index}
                        type={info}
                        onEdit={handleEdit}
                    />
                    <ButtonErase 
                        index={index}
                        type={info}
                        onDelete={handleDelete}
                    />
                </div>
                {showModal && (
                    <ConfirmationModal  
                        message="Are you sure you want to delete this item?"
                        onConfirm={() => {
                            props.onDeleteItem(deleteTarget.index, deleteTarget.type)
                            setShowModal(false)
                        }}
                        onCancel={() => setShowModal(false)}
                    />
                )}
            </div>
        )))
    }

    const displayLanguages = (arr, info) => {
        if(!Array.isArray(arr)) return;

        return (arr.map((item, index) => (
            <div key={index} className="languages-item">
                <p>I speak {item.language} with a level of {item.level}</p>
                <div className="container-button">
                    <ButtonEdit 
                        index={index}
                        type={info}
                        onEdit={handleEdit}
                    />
                    <ButtonErase 
                        index={index}
                        type={info}
                        onDelete={handleDelete}
                    />
                </div>
                {showModal && (
                    <ConfirmationModal  
                        message="Are you sure you want to delete this item?"
                        onConfirm={() => {
                            props.onDeleteItem(deleteTarget.index, deleteTarget.type)
                            setShowModal(false)
                        }}
                        onCancel={() => setShowModal(false)}
                    />
                )}
            </div>
        )))
    }

    return (
        <div className="main-container">
                <div className="header-main"> 
                    <div className="name-header">
                        {props.detailsValues.fullName && <h2>{props.detailsValues.fullName}</h2>}
                    </div>         
                    <div className="details-header">
                        {props.detailsValues.email && <p>em@il: {props.detailsValues.email}</p>}
                        {props.detailsValues.phoneNumber && <p>Phone Number: {props.detailsValues.phoneNumber}</p>}
                        {props.detailsValues.fullName && 
                            <ButtonEdit
                                index={0}
                                type={"details"}
                                onEdit={handleEdit} 
                            />
                        }
                    </div>
                </div>
                <div className="main-workExp">
                    {displayItemsList(props.workValues, "work")}
                </div>
                {props.workValues.length !== 0 && <hr></hr>}
                <div className="main-schoolEdu">
                    {displayItemsList(props.schoolValues, "school")}
                </div>
                {props.schoolValues.length !== 0 && <hr></hr>}
                <div className="main-languages">
                    {displayLanguages(props.langValues, "lang")}
                </div>
        </div>
    )
}

export default MainContent;