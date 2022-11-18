import React from "react";


function PersonalResult({data, ldata, title, address , phone}) {


console.log()

        return (
        <div className="personalResult">
       
           
            <div className="name">
           <div className="firstName">{data}</div>
            <div className="lastName">{ldata}</div>
            </div>
            <div className="title">{title}</div>
            
            <div className="contactContainer">
            <div className="address">{address}</div>
            <div className="phoneNumber">{phone}</div>
            </div>
            
     
           
        </div>
        )
    }
    
export default PersonalResult