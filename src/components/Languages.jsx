import ButtonSubmit from "./ButtonSubmit";

function Languages(){
    return (
        <div className="container-languages">
            <h4>Languages</h4>
            <p>Language:</p>
            <input type="text" />
            <p>Level:</p>
            <select name="lang-levels" id="lang-levels">
                <option value="basic1">Basic 1</option>
                <option value="basic2">Basic 1</option>
                <option value="ind1">Independent 1</option>
                <option value="ind2">Independent 2</option>
                <option value="proficient1">Proficient 1</option>
                <option value="proficient2">Proficient 2</option>
            </select>
            <ButtonSubmit />
        </div>
    )
}

export default Languages;