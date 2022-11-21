import React from "react";


function AboutMe({genData}){
    return (
        <div className="aboutMeInfo">{genData.description}</div>
    )
}

export default AboutMe;