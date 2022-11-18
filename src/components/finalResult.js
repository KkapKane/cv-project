import React from "react";
import '../style/finalDisplay.scss'
import PersonalResult from "./personalResult";

function FinalDisplay({name, lname, title, address, phone}){
    return (
        <div className="finalDisplay">
           
            <PersonalResult data={name} ldata={lname} title={title} address={address} phone={phone}/>
        </div>
    )
}

export default FinalDisplay