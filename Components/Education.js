import React from 'react'

const Education = () => {
  return (
    <div className='main-content'>

        <div className='main-section'>
       <div className='main-heading'>
        <p>Education</p>
       </div>
        <br />
        <span className='input-container'>
        <div className='input-label'>
        <label htmlFor="" className='label'>First Name</label>
        <input type="text" className='input'   />
        </div>
        <div className='input-label'>
        <label htmlFor="" className='label'>Middle Name(Optional)</label>
        <input type="text" className='input' />
        </div>
        <div className='input-label'>
            
        <label htmlFor="" className='label'>Last Name</label>
        <input type="text" className='input' />
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
        <input type="text" className='input'   />
        </div>
        <div className='input-label'>
            
        <label htmlFor="" className='label'>Address</label>
        <input type="text" className='input'  />
        </div>
        </span>
       
        </div>
      
    </div>
  )
}

export default Education
