import React from "react";


function EducationResult (edu) {
    return (
      
        <div className="educationContainer2">

        <div className="university">University: {edu.edu.eduName}</div>
        <div className="eduCity">{edu.edu.eduCity}</div>
        <div className="degree">Degree: {edu.edu.degree}</div>
        <div className="eduFrom">From: {edu.edu.eduFrom}</div>
        <div className="eduTo">To: {edu.edu.eduTo}</div>
        
        </div>

    )
}

export default EducationResult;