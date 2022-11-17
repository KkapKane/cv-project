import React from "react";
import '../style/education.scss'
function Education(){
    return (
        <div className="educationContainer">
            <h1>Education</h1>
            <input type="text" placeholder="University Name"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="Degree"/>
            <input type="text" placeholder="Subject"/>
            <input type="text" placeholder="From"/>
            <input type="text" placeholder="To"/>
            <div className="buttonContainer">
                <button>Delete</button>
                <button>Add</button>
            </div>
        </div>
    )
}

export default Education