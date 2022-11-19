
import PersonalInfo from "./components/personal";
import FinalDisplay from "./components/finalResult";
import React, {useState} from "react";



function App() {

  const [data,setData]=useState("John")
  const [ldata,setLData]=useState("Smith")
  const [title,setTitle] = useState('Accountant')
  const [address,setAddress] = useState('52-E Lincoln St, Mankuto City, Misouri')
  const [phone,setPhone] = useState('+54-123-456-789')
  const [email,setEmail] = useState('JohnSmith@live.com')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')
  
  const [visible,setVisible] = useState(true)
    const ChangeVis = () =>{
      if(visible){
        
        setVisible(false)
      }
     else if(!visible){
      setVisible(true)
     }
         
        
    }
    
  
  const getName =(name)=>{
      setData(name.target.value) 
  }
  const getLName =(Lname)=>{
    setLData(Lname.target.value)
  }
  const getTitle = (title)=> {
    setTitle(title.target.value)
  }
  const getAddress = (address)=> {
    setAddress(address.target.value)
  }

  const getPhone = (phone)=> {
    setPhone(phone.target.value)
  }
  const getEmail = (email)=> {
    setEmail(email.target.value)
  }
  const getDescription = (description)=> {
    setDescription(description.target.value)
  }

  const [position,setPosition]=useState("Manager")
    const getPosition = (position)=> {
        setPosition(position.target.value)
       
      }



  return (
<div className="mainContainer">
<PersonalInfo getName={getName} getLName={getLName} getTitle={getTitle} getAddress={getAddress} getPhone={getPhone} getDescription= {getDescription} getEmail={getEmail} getPosition={getPosition} ChangeVis={ChangeVis}/>
<FinalDisplay name={data} lname={ldata} title={title} address={address} phone={phone} email={email} description={description} position={position} visible={visible}/>
</div>
  );
}

export default App;
