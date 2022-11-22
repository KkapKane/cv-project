
import React from "react";


function ExperienceResult({experience, setShow}){

    

    return (
        
        <div className="experienceCont">
            <button  onClick={(e)=> {
                
                setShow(experience.id);
            }}  >remove</button>
        <div className="company">{experience.position} at {experience.company}</div>
        <div className="city">Located in {experience.city}</div>
        <div className="from">From: {experience.from}</div>
        <div className="to">To: {experience.to}</div>
       
        </div>
    
        )
}

export default ExperienceResult;