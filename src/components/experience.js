import React from "react";


import '../style/experience.scss'


function Experience({ register, handleSubmit, onSubmit }) {


    return (

        <div className="experienceDiv">
            <h1>Experience</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Position" id="position" {...register('position')} />
                <input type="text" placeholder="Company" id="company" {...register('company')} />
                <input type="text" placeholder="City" id="city" {...register('city')} />
                <input type="text" placeholder="From" id="from" {...register('from')} />
                <input type="text" placeholder="To" id="to" {...register('to')} />
                <input type="submit" value='add' className="submitBtn" />
            </form>
        </div>
    )
}

export default Experience

