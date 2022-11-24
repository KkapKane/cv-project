import React from "react";


function EducationResult({ edu, setShow2 }) {
    return (

        <div className="educationContainer2">

            <div className="university">University: {edu.eduName}</div>
            <div className="eduCity">{edu.eduCity}</div>
            <div className="degree">{edu.degree}</div>
            <div className="eduFrom">From: {edu.eduFrom}</div>
            <div className="eduTo">To: {edu.eduTo}</div>
            <button onClick={(e) => {

                setShow2(edu.eduid);
            }}  >remove</button>
        </div>

    )
}

export default EducationResult;