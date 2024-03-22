import React from 'react'
import '../courseform/start.css'
import Navbar from '../Navbar/Navbar'

const Studentsuggetion = () => {
  return (
   <>
   <Navbar/>
    <div className='start' style={{display:'flex',justifyContent:'center'}}>
        <form action="#" className="form">
          <h1>Suggest any topic</h1>

          <div className="input-box">
            <h3>Title of your topic</h3>
            <input type="text" name='resname' style={{ width: '100%' }} placeholder="Write title of your topic" required />
            <br />
            <h3>Topic Description</h3>
            <input type="text" name='tagline' style={{ width: '100%' }}  placeholder="Please provide the necessary topic description below." />
            <br />
          </div>
          <button style={{backgroundColor:'#1AB79D',paddingInline:'20px',width:'100%',height:'50px',fontWeight:'bold',borderRadius:'10px'}}>Send</button>
        </form>
    </div>
   </>
  )
}

export default Studentsuggetion;