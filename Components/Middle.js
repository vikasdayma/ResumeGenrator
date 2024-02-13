import React from 'react'
import { Link } from 'react-router-dom'
import './Middle.css'
const Middle = () => {
  return (
    <div className='mid-section'>
      <img src="visuals.svg" alt="" className='visuals-img' />
      
      <div style={{width:"25rem",marginRight:"5rem", marginTop:"9rem"}}>
      <h2>Use The Best Resume Maker
          As Your Guide</h2>
      <p style={{fontSize:"1.1rem",}} >
      Craft your professional story effortlessly with our intuitive resume builder website. Seamlessly compile your skills, experience, and achievements into a compelling document. Tailor-made templates, user-friendly interface, and expert guidance ensure your resume stands out. Elevate your career journey today.
     </p>
     <div className='buttons'>
     <Link to="resume"> <button className='create-button'>Create My Resume</button></Link> 
      <Link to="about"><button className='view-button'>View Resumes</button></Link> </div>
     </div>
    </div>
  )
}

export default Middle
