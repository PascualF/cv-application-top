import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function PersonalDetails(props){
    const [inputValue, setInputValue] = useState({
        fullName: "",
        phoneNumber: "",
        email: ""
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleInputValue = (e) => {
        const { name, value } = e.target;

        setInputValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }

    //Butoon handling
    const handleSave = () => {

        props.detailsInput(inputValue)
        setIsSubmitted(true)
        setInputValue({
            fullName: "",
            phoneNumber: "",
            email: ""
        })
    }

    const allFieldsFilled = () => {
        return inputValue.fullName && inputValue.email && inputValue.phoneNumber
    }

    // When saving the details to the main content the button turns disabled.
    const isButtonDisabled = isSubmitted || !allFieldsFilled()

    return (
        <div className="container-details">
            <h4>Personal Details</h4>
            <p>Full name:</p>
            <input 
                type="text" 
                name="fullName" 
                onChange={handleInputValue} 
                value={inputValue.fullName}
            />
            <p>Phone number:</p>
            <input 
                type="text" 
                name="phoneNumber" 
                onChange={handleInputValue} 
                value={inputValue.phoneNumber}
            />
            <p>Email:</p>
            <input 
                type="text" 
                name="email" 
                onChange={handleInputValue} 
                value={inputValue.email}
            />

            <ButtonSubmit 
                onClick={handleSave}
                isDisabled={isButtonDisabled}
                isSubmitted={isSubmitted ? "Details Saved" : "Save Details"}
            />
        </div>
    )   
}

export default PersonalDetails;