import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function Education(props){

    const [schoolInput, setSchoolInput] = useState({
            school:"",
            course:"",
            dateFrom:"",
            dateTo:""
        })

    const handleInput =(e) => {
        const {name, value} = e.target
            
        setSchoolInput((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }
    
    const [loadingEdit, setLoadingEdit] = useState(false)

    if (props.schoolToEdit && !loadingEdit){
        const {data} = props.schoolToEdit
        setSchoolInput({
            school: data.school||"",
            course: data.course||"",
            dateFrom: data.dateFrom||"",
            dateTo: data.dateTo||""
        })
        setLoadingEdit(true)
    }

    const handleAddSchool = () => {
        if(!allFieldsFilled()) return;

        const schoolList = props.newSchoolValues || []

        if(props.schoolToEdit){
            const updateList = [...schoolList];
            const index = props.schoolToEdit.index
            updateList[index] = schoolInput
            props.schoolInput(updateList)
        } else {
            const updateList = [...schoolList, schoolInput]
            props.schoolInput(updateList)
        }

        setSchoolInput({
            school:"",
            course:"",
            dateFrom:"",
            dateTo:""
        })
        setLoadingEdit(false)
        props.clearFields()
    }

    // This will return TRUE only if all the inputs are filled
    const allFieldsFilled = () => {
        return schoolInput.school.trim() && schoolInput.course.trim() && schoolInput.dateFrom && schoolInput.dateTo
    }

    // Disable if fields are not filled
    const isButtonDisabled = !allFieldsFilled()

    return (
        <div className="container-education">
            <h4>Education</h4>
            <p>School:</p>
            <input 
                type="text" 
                onChange={handleInput}
                value={schoolInput.school}
                name="school"
            />
            <p>Course:</p>
            <input 
                type="text"
                onChange={handleInput}
                value={schoolInput.course}
                name="course" 
            />
            <p>Date:</p>
            <p>From:
            <input 
                type="date"
                onChange={handleInput}
                value={schoolInput.dateFrom} 
                name="dateFrom"
            /></p>
            <p>To:
            <input 
                type="date"  
                onChange={handleInput}
                value={schoolInput.dateTo}
                name="dateTo"
                className="date-ending"
            /></p>
            
            <ButtonSubmit 
                onClick={handleAddSchool}
                isDisabled={isButtonDisabled}
                isSubmitted={isButtonDisabled ? "Fill fields" : "Add course"}
            />
        </div>
    )
}

export default Education;