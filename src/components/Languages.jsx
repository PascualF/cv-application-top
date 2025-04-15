import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function Languages(props){

    const [langInput, setLangInput] = useState({
        language: "",
        level: ""
    })

    const [ loadingEdit, setLoadingEdit ] = useState(false)

    if (
        props.langToEdit &&
        props.langToEdit.type === "lang" &&
        !loadingEdit &&
        (langInput.language !== props.langToEdit.data.language || langInput.level !== props.langToEdit.data.level)
    ) {
        const { data } = props.langToEdit;
        setLangInput({
            language: data.language || "",
            level: data.level || ""
        });
        setLoadingEdit(true); // so we don’t run this again
    }

    const handleInput = (e) => {
        const {name, value} = e.target
        
        setLangInput((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    

    const handleSaveInput = () => {
        if(!allFieldsFilled) return 

        const langList = props.newLangValues || []

        if(props.langToEdit) {
            const updateList = [...langList]
            const index = props.langToEdit.index
            updateList[index] = langInput
            props.langInput(updateList)
        } else {
            const updateList = [...langList, langInput]
            props.langInput(updateList)
        }

        setLangInput({
            language: "",
            level: ""
        })
        setLoadingEdit(false)
        props.clearFields()
    }

    // This will give true when all the fields are filled
    const allFieldsFilled = () => {
        return langInput.language.trim() && langInput.level
    }

    // This will maintain the button disables when all fields are emtpy.
    const isButtonDisabled = !allFieldsFilled()

    return (
        <div className="container-languages">
            <h4>Languages</h4>
            <p>Language:</p>
            <input 
                type="text"
                onChange={handleInput}
                name="language"
                value={langInput.language}

            />
            <p>Level:</p>
            <select 
                name="level"   
                id="lang-levels" 
                value={langInput.level} 
                onChange={handleInput}
            >
                <option value="" default></option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
            </select>
            <ButtonSubmit 
                onClick={handleSaveInput}
                /* Disabled is TRUE while eveything empty. */
                isDisabled={isButtonDisabled}
                isSubmitted={isButtonDisabled ? "Fill fields" : "Add Language"}
            />
        </div>
    )
}

export default Languages;