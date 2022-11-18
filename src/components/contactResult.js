import React from "react";



function ContactResult({address, phone, email}){


    return(
        <div className="contactContainer">
                <div className="address">{address}</div>
                <div className="phoneNumber">{phone}</div>
                <div className="email">{email}</div>
               
            </div>
    )
}

export default ContactResult;