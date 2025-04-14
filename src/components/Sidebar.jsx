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
                clearItemToDelete={props.clearItemToDelete}
            />
            <WorkExperience 
                workInput={props.workValueInput}
                workToEdit={props.itemToEdit}

                itemToDelete={props.itemToDelete}
                clearItemToDelete={props.clearItemToDelete}
            />
            <Education 
                schoolInput={props.schoolValueInput}
                schoolToEdit={props.itemToEdit}
            />    
            <Languages 
                langInput={props.langValueInput}
            />
        </div>
    )
}

export default Sidebar;