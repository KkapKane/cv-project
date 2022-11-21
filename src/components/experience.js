import React, {useState} from "react";
import {useForm} from "react-hook-form";

import '../style/experience.scss'


function Experience({getExperiences,experiences, updateExperience, setExp}){

 const {register,handleSubmit} = useForm();

 const onSubmit = (data) => {
    console.log(data)
    console.log(data.position)
    setExp(data)
    
    
    return data
 }

    return (
        
        <div className="experienceDiv">
            <h1>Experience</h1>
            <button onClick={setExp}>add things</button>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  placeholder="Position" id="position" {...register('position')}/>
            <input type="text"  placeholder="Company" id="company" {...register('company')}/>
            
            <input type="text"  placeholder="City" id="city" {...register('city')}/>
            <input type="text"  placeholder="From" id="from" {...register('from')}/>
            <input type="text"  placeholder="To" id="to" {...register('to')}/>
            <input type="submit" />
            <div className="buttonContainer">
                <button >Delete</button>
                <button>Add</button>
          
            </div>
          
            </form>
        </div>
    )
}

export default Experience