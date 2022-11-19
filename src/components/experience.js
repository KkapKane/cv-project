import React, {useState} from "react";
import '../style/experience.scss'

function Experience({getPosition, ChangeVis}){
    
    return (
        <div className="experienceDiv">
            <h1>Experience</h1>
            <input type="text"  placeholder="Position" onChange={getPosition}/>
            <input type="text"  placeholder="Company"/>
            <input type="text"  placeholder="City"/>
            <input type="text"  placeholder="From"/>
            <input type="text"  placeholder="To"/>
            <div className="buttonContainer">
                <button>Delete</button>
                <button onClick={ChangeVis}>Add</button>
            </div>
        </div>
    )
}

export default Experience