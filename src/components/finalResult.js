import React from "react";
import '../style/finalDisplay.scss'
import ContactResult from "./contactResult";
import PersonalResult from "./personalResult";


function FinalDisplay({name, lname, title, address, phone, email, description}){
    return (
        <div className="finalDisplay">
        <div className="left">
            <div className="picture">Picture</div>
            <div className="aboutMe">About Me</div>
            <div className="contactMe">Contact Me</div>
            <ContactResult address={address} phone={phone} email={email}/>

          </div>
           <div className="right">
              <PersonalResult data={name} ldata={lname} title={title} />

              <div className="workExperience">Work Experience</div>
           </div>
          
            
        </div>
    )
}

export default FinalDisplay