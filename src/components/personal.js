import React, {useState} from "react";
import Experience from "./experience";
import Education from "./education";
import '../style/personal.scss'

function PersonalInfo({getName , getLName, getTitle, getAddress, getPhone}){
    

    return(

        <div className="personalContainer">
            <h1>Personal Info</h1>

            <input type="text" placeholder="First name" onChange={getName}/>
            <input type="text" placeholder="Last name"onChange={getLName}/>
            <input type="text" placeholder="Title" onChange={getTitle}/>
            <input type="text" placeholder="Address" onChange={getAddress}/>
            <input type="text" placeholder="Phone Number"onChange={getPhone}/>
            <input type="text" placeholder="email"/>
            
            <textarea placeholder="description" className="description"/>
         
        <Experience/>
        <Education />
        </div>
        
    )
}

export default PersonalInfo;