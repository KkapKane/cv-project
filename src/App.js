
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
  const [description, setDescription] = useState('lorem ipsum')
  
  
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





  return (
<div className="mainContainer">
<PersonalInfo getName={getName} getLName={getLName} getTitle={getTitle} getAddress={getAddress} getPhone={getPhone} getDescription= {getDescription} getEmail={getEmail}/>
<FinalDisplay name={data} lname={ldata} title={title} address={address} phone={phone} email={email} description={description}/>
</div>
  );
}

export default App;
