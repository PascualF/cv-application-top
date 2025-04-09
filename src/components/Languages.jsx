import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function Languages(){

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

    }

    const allFieldsFilled = () => {
        return langInput.language.trim() && langInput.level
    }

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
                <option value="basic1">Basic 1</option>
                <option value="basic2">Basic 1</option>
                <option value="ind1">Independent 1</option>
                <option value="ind2">Independent 2</option>
                <option value="proficient1">Proficient 1</option>
                <option value="proficient2">Proficient 2</option>
            </select>
            <ButtonSubmit 
                onClick={handleSaveInput}
                isDisabled={isButtonDisabled}
                isSubmitted={isButtonDisabled ? "Fill fields" : "Add Language"}
            />
        </div>
    )
}

export default Languages;