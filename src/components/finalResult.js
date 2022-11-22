import '../style/finalDisplay.scss'
import ContactResult from "./contactResult";
import PersonalResult from "./personalResult";
import AboutMe from "./aboutMe";
import ExperienceResult from "./experienceResult";
import EducationResult from './educationResult';


function FinalDisplay({genData, experiences,setExp,setShow,education}){

   
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
              
              <div className="expDiv">
                
  {experiences.map(experience => {
    if(experience.show === true){
  return (
    <div key={experience.id} className='experienceContainer1'>
    <ExperienceResult key={experience.id} experience={experience}  setShow={setShow}/>
    </div>
  )}
})}
</div>

<div className="eduDiv">Education</div>

<div  className="eduDivCont">
{education.map(edu => {
    if(edu.show === true){
  return (
    <div key={edu.eduid} className='eduContainer1'>
      <EducationResult edu={edu} key={edu.eduid}/>
    </div>
  )}
})}

  </div>

           </div>
     
            
        </div>
    )
}

export default FinalDisplay