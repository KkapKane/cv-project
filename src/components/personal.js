import Experience from "./experience";
import Education from "./education";
import '../style/personal.scss'

function PersonalInfo({handlePersonal, genData, handleChange, setExp,onSubmit,handleSubmit,register,onSubmitEdu, handleSubmit2, register2}){
    
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
        
        <Experience  handleChange={handleChange}  setExp={setExp} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit}/>
        <Education handleSubmit2={handleSubmit2} register2={register2} onSubmitEdu={onSubmitEdu} />
        </div>
        
    )
}

export default PersonalInfo;