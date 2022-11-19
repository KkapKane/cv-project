import React, {useState} from "react";
import '../style/finalDisplay.scss'
import ContactResult from "./contactResult";
import PersonalResult from "./personalResult";
import AboutMe from "./aboutMe";
import ExperienceResult from "./experienceResult";


function FinalDisplay({name, lname, title, address, phone, email, description, position,visible}){

   
    return (
        <div className="finalDisplay">
        <div className="left">
            <div className="picture">Picture</div>
            <div className="aboutMe">About Me
          <AboutMe description={description}/> 
            </div>
            
            <div className="contactMe">Contact Me</div>
            <ContactResult address={address} phone={phone} email={email}/>

          </div>
           <div className="right">
              <PersonalResult data={name} ldata={lname} title={title} />

              <div className="workExperience">Work Experience</div>
            {visible ? <ExperienceResult position={position} /> : null}
           </div>
     
            
        </div>
    )
}

export default FinalDisplay