import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
   <div className='logo'>
     <img src="logo.png" height={40} alt="" style={{marginTop:"1rem"}}  width={40}/>
    <h3 className='builder'>Resume</h3> 
    <h3 className='builder'>Builder</h3>
    
   </div>

   <div>
    <Link to='/' className='tags tag'>Home</Link>
    <Link to='/' className='tags tag'>Resume Examples</Link>
   </div>
    </div>
  )
}

export default Navbar
