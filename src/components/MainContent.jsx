function MainContent(props){


    const displayItemsList = (arr, info) => {
        if(!Array.isArray(arr)) return;

        return (arr.map((item, index) => (
            <div key={index} className={`${info}-item`}>
                    <p><strong>{info === "work" ? "Company:" : "School:"}</strong> {item.company ? item.company : item.school}</p>
                    <p><strong>{info === "work" ? "Role:" : "Course:"}</strong> {item.role ? item.roel : item.course}</p>
                    <p><strong>From:</strong> {item.dateFrom} <strong>To:</strong> {item.dateTo}</p>
            </div>
        )))
    }

    return (
        <div className="main-container">
                <div className="header-main"> 
                    <div className="name-header">
                        {props.detailsValues.fullName && <h2>{props.detailsValues.fullName}</h2>}
                    </div>         
                    <div className="details-header">
                        {props.detailsValues.email && <p>em@il: {props.detailsValues.email}</p>}
                        {props.detailsValues.phoneNumber && <p>Phone Number: {props.detailsValues.phoneNumber}</p>}
                    </div>
                </div>
                <div className="main-workExp">
                    {displayItemsList(props.workValues, "work")}
                </div>
                <div className="main-schoolEdu">
                    {displayItemsList(props.schoolValues, "school")}
                </div>
                <div className="main-languages">
                    <p>This will be again a List of Languagues and proficency</p>
                </div>
        </div>
    )
}

export default MainContent;