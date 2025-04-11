import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function Languages(props){

    const [langInput, setLangInput] = useState({
        language: "",
        level: ""
    })


    const [langList, setLangList] = useState([])

    const handleInput = (e) => {
        const {name, value} = e.target
        
        setLangInput((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSaveInput = () => {
        const updateList = [...langList, langInput]
        setLangList(updateList)
        props.langInput(updateList)

        setLangInput({
            language: "",
            level: ""
        })
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
            <select name="level" id="lang-levels" value={langInput.level} onChange={handleInput}>
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