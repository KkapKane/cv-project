
import Experience from "./experience";
import Education from "./education";
import '../style/personal.scss'

function PersonalInfo({handlePersonal, genData, updateExperience,  handleChange, getExperiences, experiences, Pid, setExp}){
    
  return(

        <div className="personalContainer">
            <h1>Personal Info</h1>

            <input type="text"  id="name" value={genData.name} onChange={handlePersonal}/>
            <input type="text" placeholder="Last name" id ="last" value={genData.last} onChange={handlePersonal}/>
            <input type="text" placeholder="Title" id="title" value={genData.title} onChange={handlePersonal}/>
            <input type="text" placeholder="Address" id="address" value={genData.address} onChange={handlePersonal}/>
            <input type="text" placeholder="Phone Number" id="phone" value={genData.phone} onChange={handlePersonal}/>
            <input type="text" placeholder="email" id="email" value={genData.email} onChange={handlePersonal}/>
       
            <textarea placeholder="description" className="description" id="description" value={genData.description} onChange={handlePersonal}/>
        
        <Experience Pid={Pid}getExperiences={getExperiences} experiences={experiences}   handleChange={handleChange} updateExperience={updateExperience} setExp={setExp}/>
        <Education />
        </div>
        
    )
}

export default PersonalInfo;