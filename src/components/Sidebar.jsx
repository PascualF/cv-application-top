import Languages from "./Languages";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

function Sidebar(props){
    return (
        <div className="sidebar-container">
            <PersonalDetails 
                detailsInput={props.detailsInput}
            />
            <WorkExperience 
                workInput={props.workValueInput}
                workToEdit={props.itemToEdit}
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