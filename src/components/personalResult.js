import React from "react";


function PersonalResult({data, ldata, title}) {


console.log()

        return (
        <div className="personalResult">
       
           
            <div className="name">
                <div className="firstName">{data}</div>
                <div className="lastName">{ldata}</div>
            </div>
            <div className="title">{title}</div>
            
            
            
      
           
        </div>
        )
    }
    
export default PersonalResult