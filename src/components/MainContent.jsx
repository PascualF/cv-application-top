function MainContent(props){


    const displayItemsList = (arr, info) => {
        if(!Array.isArray(arr)) return;

        return (arr.map((item, index) => (
            <div key={index} className={`${info}-item`}>
                    <p><strong>Company:</strong> {item.company}</p>
                    <p><strong>Role:</strong> {item.role}</p>
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
                    {/* {Array.isArray(props.workValues) && props.workValues.map((work, index) => (
                        <div key={index} className="work-item">
                            <p><strong>Company:</strong> {work.company}</p>
                            <p><strong>Role:</strong> {work.role}</p>
                            <p><strong>From:</strong> {work.dateFrom} <strong>To:</strong> {work.dateTo}</p>
                        </div>
                    ))} */}
                </div>
                <div className="main-schoolEdu">
                    {displayItemsList(props.schoolValues, "school")}
                    {/* {Array.isArray(props.schoolValues) && props.schoolValues.map((school, index) => (
                        <div key={index} className="work-item">
                            <p><strong>Company:</strong> {school.company}</p>
                            <p><strong>Role:</strong> {school.role}</p>
                            <p><strong>From:</strong> {school.dateFrom} <strong>To:</strong> {school.dateTo}</p>
                        </div>
                    ))} */}
                </div>
        </div>
    )
}

export default MainContent;