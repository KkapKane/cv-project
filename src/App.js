
import PersonalInfo from "./components/personal";
import FinalDisplay from "./components/finalResult";
import React, {useState} from "react";
import {v1 as uuid} from "uuid"; 


function App() {

  const setExp = () => {
    setExperiences([...experiences, {company: 'random', id: uuid()}])
    console.log(experiences)

  }


  const [experiences, setExperiences] = useState([
    {position: 'developer', company: 'meta', city: 'houston', from: '12/12/12', to: '12/12/13',id: uuid() },
    {position: 'developer', company: 'micosoft', city: 'houston', from: '12/12/12', to: '12/12/13',id: uuid()},
    {position: 'developer', company: 'amazon', city: 'houston', from: '12/12/12', to: '12/12/13',id: uuid()},
    {position: 'developer', company: 'netflix', city: 'houston', from: '12/12/12', to: '12/12/13',id: uuid()}
     
    
  ]);
 
  const [val,setVal] = useState([])
  const handleAdd = () => {
    const abc=[...val,[]]

    
    setVal(abc)


    
} 



function updateExperience(id, newPosition, newCompany){

  

  setExperiences({id: id,position: newPosition, company: newCompany});
}

const handleChange = (onChangeValue,i) =>{
    const inputdata = [...val]
    inputdata[i]=onChangeValue.target.value
    setVal(inputdata)


    console.log(inputdata)
  

}

const handlePersonal = event => {
  const id = event.target.id;
  const value = event.target.value
  setGenData(values => ({...values,[id]: value}))
}

const getExperiences = event => {
  const id = event.target.id;
  const value = event.target.value
  setExperiences(values=> ({...values, [id]: value}))
}
  const [genData,setGenData] =useState({
    name: 'John',
    last: 'Smith',
    title: 'Accountant',
    address: '52-E Lincoln St, Mankuto City, Misouri',
    phone: '+54-123-456-789',
    email: 'JohnSmith@live.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  })



 
  const [visible,setVisible] = useState(true)
    const ChangeVis = () =>{
      if(visible){
        
        setVisible(false)
      }
     else if(!visible){
      setVisible(true)
     }
         
        
    }
    
  





  return (
<div className="mainContainer">





<PersonalInfo  updateExperience={updateExperience} 
handlePersonal={handlePersonal} 
genData={genData} 
getExperiences={getExperiences} 
experiences={experiences} 
ChangeVis={ChangeVis} 


handleAdd={handleAdd} 
handleChange={handleChange}

setExp={setExp}

Pid={experiences.id}
/>

<FinalDisplay genData={genData} experiences={experiences} visible={visible} val={val} setVal = {setVal}  />
</div>
  );
}

export default App;
