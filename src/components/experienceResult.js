import React from "react";


function ExperienceResult({ experiences}){
    return (
        
        <div className="experienceCont">
            {experiences.map(experience => {
  return (
    <li key={experience.id}>{experience.company}</li>
  )
})}
        <div className="position">{experiences.position}</div>
        <div className="company">{experiences.company}</div>
        <div className="city">{experiences.city}</div>
        <div className="from">From: {experiences.from}</div>
        <div className="to">To: {experiences.to}</div>
        
        </div>
    
        )
}

export default ExperienceResult;