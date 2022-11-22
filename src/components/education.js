import React from "react";
import '../style/education.scss'
function Education({register2, handleSubmit2, onSubmitEdu}){
    return (
        <div className="educationContainer">
            <h1>Education</h1>
            <form onSubmit={handleSubmit2(onSubmitEdu)}>
      
            <input type="text" placeholder="University Name"  {...register2('eduName')} />
            <input type="text" placeholder="City"  {...register2('eduCity')}/>
            <input type="text" placeholder="Degree"{...register2('degree')}/>
            <input type="text" placeholder="Subject"{...register2('subject')}/>
            <input type="text" placeholder="From"{...register2('eduFrom')}/>
            <input type="text" placeholder="To"{...register2('eduTo')}/>
            <input type="submit" />
           </form>
            <div className="buttonContainer">
                <button>Delete</button>
                <button>Add</button>
            </div>
        </div>
    )
}

export default Education