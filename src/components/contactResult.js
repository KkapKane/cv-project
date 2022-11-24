import React from "react";



function ContactResult({ genData }) {


    return (
        <div className="contactContainer">
            <div className="address">{genData.address}</div>
            <div className="phoneNumber">{genData.phone}</div>
            <div className="email">{genData.email}</div>

        </div>
    )
}

export default ContactResult;