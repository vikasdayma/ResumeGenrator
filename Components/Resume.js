import React,{useState} from 'react'
import './Resume.css'
import Experince from './Experince'
import Education from './Education'
import Project from './Project'
import Skills from './Skills'

const Resume = () => {
  const[getval1,setval1]=useState();
  const[getval2,setval2]=useState();
  const[getval3,setval3]=useState();
  const[getval4,setval4]=useState();
  const[getval5,setval5]=useState();
  const[getval6,setval6]=useState(); 
  const[getval7,setval7]=useState();
  const[getval8,setval8]=useState(); 
  const[getval9,setval9]=useState(); 
   const changeHanlder1=(event)=>{
    
    setval1(event.target.value);  
    console.log(setval1);
   }

  return (
    <>
    <h1>{getval1}</h1>
    <div className='main-content'>
        <div className='main-section'>
       <div className='main-heading'>
        <p>About</p>
       </div>
        <br />
        <span className='input-container'>
        <div className='input-label'>
        <label htmlFor="" className='label'>First Name</label>
        <input type="text" className='input' onChange={changeHanlder1} />
        
        </div>
        <div className='input-label'>
        <label htmlFor="" className='label'>Middle Name(Optional)</label>
        <input type="text" className='input'   />
        </div>
        <div className='input-label'>
            
        <label htmlFor="" className='label'>Last Name</label>
        <input type="text" className='input'  />
        </div>
        </span>
        <br />
        <br />
        <span className='input-container'>
        <div className='input-label'>
        <label htmlFor="" className='label' >Linked</label>
        <input type="text" className='input'   />
        </div>
        <div className='input-label'>
        <label htmlFor="" className='label'>Designation</label>
        <input type="text" className='input'  />
        </div>
        <div className='input-label'>
        <label htmlFor="" className='label'>Address</label>
        <input type="text" className='input'  />
        </div>
        </span>
        <br />
         <br />
        <span className='input-container'>
        <div className='input-label'>
        <label htmlFor="" className='label'>Email</label>
        <input type="email" className='input'   />
        </div>
        <div className='input-label'>
        <label htmlFor="" className='label'>Phone Number</label>
        <input type="number" className='input'  />
        </div>
        <div className='input-label'>    
        <label htmlFor="" className='label'>Pin Code</label>
        <input type='number' className='input' />
        </div>
        </span>
        </div>
    </div>
    <br />
  <Experince></Experince>
  <br />
  <Education></Education>
  <br />
  <Project></Project>
  <br />
  <Skills></Skills>
    </>
  )
}
export default Resume
