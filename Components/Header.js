import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import'./Header.css'
import Middle from './Middle';
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='header-content'>
    <p className='header-heading'>Online Resume Builder </p>
    {/* <h1> Only 2% Resumes make it past the first round.Be in the top 2%</h1> */}
   <h3 >Search by job title to find resumes from resume experts that can inspire your own resume creation.</h3>
   <br />
  {/* <p className='third-heading'>  <FaArrowUpLong className='arrow' /> 2x More Job Offers  
   </p> */}
   <Link to="resume"> <button className='create-button'>Create My Resume</button></Link> 
 <br />
 <img src="template.avif" alt="" style={{width:"35rem",height:"20em"}} />
 <br />

   </div>
   
    </div>
    <Middle></Middle>
   
    </>
  )
}

export default Header
