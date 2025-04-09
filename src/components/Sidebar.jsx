import Languages from "./Languages";
import PersonalDetails from "./PersonalDetails";
import SchoolExperience from "./Education";
import WorkExperience from "./WorkExperience";

function Sidebar(props){
    return (
        <div className="sidebar-container">
            <PersonalDetails detailsInput={props.detailsInput}/>
            <WorkExperience workInput={props.workValueInput}/>
            {<SchoolExperience />}
            <Languages />
        </div>
    )
}

export default Sidebar;