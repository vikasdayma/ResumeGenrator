import React from 'react'

const Skills = () => {
  return (
    <div className='main-content'>

    <div className='main-section'>
   <div className='main-heading'>
    <p>Skills</p>
   </div>
    <br />
    <span className='input-container'>
    <div className='input-label'>
    <label htmlFor="" className='label'>First Name</label>
    <input type="text" className='input'   />
    </div>
    <div className='input-label'>
    <label htmlFor="" className='label'>Middle Name(Optional)</label>
    <input type="text" className='input'  />
    </div>
    <div className='input-label'>
        
    <label htmlFor="" className='label'>Last Name</label>
    <input type="text" className='input'  />
    </div>
    </span>
  
  </div>
</div>
  )
}

export default Skills
