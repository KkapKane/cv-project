import React from "react";


function PersonalResult({genData}) {


console.log()

        return (
        <div className="personalResult">
       
           
            <div className="name">
                <div className="firstName">{genData.name}</div>
                <div className="lastName">{genData.last}</div>
            </div>
            <div className="title">{genData.title}</div>
            
            
            
      
           
        </div>
        )
    }
    
export default PersonalResult