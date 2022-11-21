
import '../style/finalDisplay.scss'
import ContactResult from "./contactResult";
import PersonalResult from "./personalResult";
import AboutMe from "./aboutMe";
import ExperienceResult from "./experienceResult";


function FinalDisplay({genData,position,visible,val, experiences}){

   
    return (
        <div className="finalDisplay">
        <div className="left">
            <div className="picture">Picture</div>
            <div className="aboutMe">About Me
          <AboutMe genData={genData}/> 
            </div>
            
            <div className="contactMe">Contact Me</div>
            <ContactResult genData={genData}/>

          </div>
           <div className="right">
              <PersonalResult genData={genData}  />

              <div className="workExperience">Work Experience</div>
              
            {visible ? <ExperienceResult position={position} val={val} experiences={experiences}/> : null}
           </div>
     
            
        </div>
    )
}

export default FinalDisplay