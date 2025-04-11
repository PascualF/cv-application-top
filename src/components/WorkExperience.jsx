import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function WorkExperience(props){

    const [workInput, setWorkInput] = useState({
        company:"",
        role:"",
        description: "",
        dateFrom:"",
        dateTo:""
    })

    const [workList, setWorkList] = useState([])

    const handleInput =(e) => {
        const {name, value} = e.target
        
        setWorkInput((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }

    // On click button. Adding work experience to the list, and sending list to the APP then MainContent.
    const handleAddWork = () => {
        if(!allFieldsFilled()) return;

        const updateList = [...workList, workInput]
        setWorkList(updateList)
        props.workInput(updateList)

        // Reset workInput
        setWorkInput({
            company:"",
            role:"",
            description:"",
            dateFrom:"",
            dateTo:""
        })
    }

    // This will return TRUE only if all the inputs are filled
    const allFieldsFilled = () => {
        return workInput.company.trim() && workInput.role.trim() && workInput.dateFrom && workInput.dateTo && workInput.description
    }

    // Disable if fields are not filled
    const isButtonDisabled = !allFieldsFilled()

    return (
        <div className="container-work-exp">
            <h4>Work Experience</h4>
            <p>Company Name</p>
            <input 
                type="text" 
                onChange={handleInput}
                name="company"
                value={workInput.company}
            />
            <p>Role</p>
            <input 
                type="text"
                onChange={handleInput}
                name="role"
                value={workInput.role}
            />
            <p>Description Role:</p>
            <textarea 
                name="description" 
                id="description"
                type="text"
                value={workInput.description}
                onChange={handleInput}
            ></textarea>
            <p>Date:</p>
            <p>From:
                <input 
                    type="date"
                    onChange={handleInput}
                    name="dateFrom"
                    value={workInput.dateFrom}
                /></p>
            <p>To:
                <input 
                    type="date" 
                    onChange={handleInput}
                    name="dateTo"
                    value={workInput.dateTo}
                    className="date-ending"
                /></p>
            <ButtonSubmit 
                onClick={handleAddWork}
                isDisabled={isButtonDisabled}
                isSubmitted={isButtonDisabled ? "Fill fields" : "Add work"}
            />
            
        </div>
    )
}

export default WorkExperience;