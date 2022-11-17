import React from "react";
import '../style/experience.scss'

function Experience (){
    return (
        <div className="experienceDiv">
            <h1>Experience</h1>
            <input type="text"  placeholder="Position"/>
            <input type="text"  placeholder="Company"/>
            <input type="text"  placeholder="City"/>
            <input type="text"  placeholder="From"/>
            <input type="text"  placeholder="To"/>
            <div className="buttonContainer">
                <button>Delete</button>
                <button>Add</button>
            </div>
        </div>
    )
}

export default Experience