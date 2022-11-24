
import PersonalInfo from "./components/personal";
import FinalDisplay from "./components/finalResult";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { v1 as uuid } from "uuid";


function App() {

  const { register, handleSubmit } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    setExp(data)
  }
  const onSubmitEdu = (data) => {
    console.log(education)
    setEdu(data)
  }
  const setShow2 = (id) => {
    const updatedShow2 = education.map((edu) => {
      if (id === edu.eduid) {

        return { ...edu, show: false }
      }
      return edu
    });


    setEducation(updatedShow2);

  }


  const setShow = (id) => {
    const updatedShow = experiences.map((exp) => {
      if (id === exp.id) {
        return { ...exp, show: false }
      }
      return exp
    });


    setExperiences(updatedShow);

  }
  const setEdu = (data) => {
    setEducation([...education, { eduName: data.eduName, eduCity: data.eduCity, eduFrom: data.eduFrom, eduTo: data.eduTo, degree: data.degree, subject: data.subject, show: true, eduid: uuid() }])
  }
  const setExp = (data) => {
    setExperiences([...experiences, { position: data.position, company: data.company, from: data.from, to: data.to, city: data.city, show: true, id: uuid() }])
  }


  const [experiences, setExperiences] = useState([

    { position: 'Developer', company: 'Meta', city: 'Houston', from: '12/12/12', to: '12/12/13', show: true, id: uuid() },
    { position: 'Manager', company: 'Micosoft', city: 'Dallas', from: '12/12/12', to: '12/12/13', show: true, id: uuid() },
    { position: 'Analyst', company: 'Amazon', city: 'New York', from: '12/12/12', to: '12/12/13', show: true, id: uuid() },
    { position: 'Intern', company: 'Netflix', city: 'LA', from: '12/12/12', to: '12/12/13', show: true, id: uuid() }

  ]);

  const [education, setEducation] = useState([

    { eduName: 'Harvard', eduCity: 'Cambridge, MA', degree: 'Computer Science', subject: 'computer', eduFrom: '12/12/12', eduTo: '12/12/12', show: true, eduid: uuid() },
    { eduName: 'Stanford', eduCity: 'Cambridge, MA', degree: 'Computer Science', subject: 'computer', eduFrom: '12/12/12', eduTo: '12/12/12', show: true, eduid: uuid() }

  ]);

  const [val, setVal] = useState([])
  const handleAdd = () => {
    const abc = [...val, []]
    setVal(abc)
  }




  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val]
    inputdata[i] = onChangeValue.target.value
    setVal(inputdata)
  }

  const handlePersonal = event => {
    const id = event.target.id;
    const value = event.target.value
    setGenData(values => ({ ...values, [id]: value }))
  }
  const [genData, setGenData] = useState({
    name: 'John',
    last: 'Doe',
    title: 'Software Engineer',
    address: '52-E Lincoln St, Mankuto City, Misouri',
    phone: '+54-123-456-789',
    email: 'JohnDoe@live.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  })
//upload and display picture
  const [file, setFile] = useState();
  function handleChange2(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

  }

  return (
    <div className="mainContainer">
      <PersonalInfo
        handlePersonal={handlePersonal}
        genData={genData}
        experiences={experiences}
        handleAdd={handleAdd}
        handleChange={handleChange}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onSubmitEdu={onSubmitEdu}
        register2={register2}
        handleSubmit2={handleSubmit2}
        setExp={setExp}
        handleChange2={handleChange2}
      />

      <FinalDisplay genData={genData} experiences={experiences} setExp={setExp} setShow={setShow} setShow2={setShow2} education={education} file={file} />
    </div>
  );
}

export default App;