import Languages from "./Languages";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

function Sidebar(props){
    return (
        <div className="sidebar-container">
            <PersonalDetails 
                detailsInput={props.detailsInput}
                detailsToEdit={props.itemToEdit}
                clearFields={props.clearFields}
            />
            <WorkExperience 
                workInput={props.workValueInput}
                workToEdit={props.itemToEdit}
                clearFields={props.clearFields}

                // When updating the list in the App.
                newWorkValues={props.workValues}

            />
            <Education 
                schoolInput={props.schoolValueInput}
                schoolToEdit={props.itemToEdit}
                clearFields={props.clearFields}

                // When updating the delete
                newSchoolValues={props.schoolValues}
            />    
            <Languages 
                langInput={props.langValueInput}
                langToEdit={props.itemToEdit}
                clearFields={props.clearFields}

                // When updating the delete
                newLangValues={props.langValues}
            />
        </div>
    )
}

export default Sidebar;