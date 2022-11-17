import React from "react";
import Experience from "./experience";
import Education from "./education";
import '../style/personal.scss'

function PersonalInfo(){
    
    return(

        <div className="personalContainer">
            <h1>Personal Info</h1>
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name"/>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Address"/>
            <input type="text" placeholder="Phone Number"/>
            <input type="text" placeholder="email"/>
        
            <textarea placeholder="description" className="description"/>
         
        <Experience/>
        <Education />
        </div>
        
    )
}

export default PersonalInfo;