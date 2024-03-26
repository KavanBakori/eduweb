import React, { useEffect, useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import './start.css'
import UploadVideoComponent from '../uploadvideo/upload'




function Start() {

    const [form, setForm] = useState({ selectedFoods: [] });
    const [value, setvalue] = useState([]);

    const handleadd = () => {
      const abc=[...value, []]
      setvalue(abc)
    }

    const handlechange = () => {
      
    }


  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setForm((prevForm) => ({
          ...prevForm,
          selectedFoods: [...prevForm.selectedFoods, value],
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          selectedFoods: prevForm.selectedFoods.filter((food) => food !== value),
        }));
      }
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
  }

  const handlesubmit = async (e) => {
  const requiredFields = document.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value) {
      isValid = true;
      // Optionally, you can add error messages or styles to indicate the empty field.
      field.style.border = '1px solid red';
    } else {
      // Reset the error styling if the field is not empty.
      field.style.border = '';
    }
  });

  if (isValid) {
    setCurrentActive(prevActive => {
      const newActive = prevActive + 1;
      return newActive > 3 ? 3 : newActive;
    });
  } 
  }


  const [currentActive, setCurrentActive] = useState(1);

  // const handleClickNext = () => {
  //   setCurrentActive(prevActive => {
  //     const newActive = prevActive + 1;
  //     return newActive > 4 ? 4 : newActive;
  //   });
  // };

  const handleClickPrev = () => {
    setCurrentActive(prevActive => {
      const newActive = prevActive - 1;
      return newActive < 1 ? 1 : newActive;
    });
  };



  return (
    <div className='start' >
        <div className="container" >
      {/* <p>{JSON.stringify(form)}</p> */}
      <div className="progress-container">
        <div className="progress" style={{ width: `${((currentActive - 1) / 2) * 100}%` }}></div>
        <div className={`circle ${currentActive === 1 ? 'active' : ''}`}>1</div>
        <div className={`circle ${currentActive === 2 ? 'active' : ''}`}>2</div>
        <div className={`circle ${currentActive === 3 ? 'active' : ''}`}>3</div>
        {/* <div className={`circle ${currentActive === 4 ? 'active' : ''}`}>4</div> */}
      </div>
      {currentActive === 1 && (
        <form action="#" className="form" >
          <h1>Enter Your Course Details </h1>

          {/* <div className="input-box">
            <div className="column">
              <div className="input-box">
                <h3>First Name</h3>
                <input type="text" name='first' placeholder="Enter your first name" onChange={handleForm} required />
              </div>
              <div className="input-box">
                <h3>Last Name</h3>
                <input type="text" name='last' placeholder="Enter your last name" onChange={handleForm} required />
              </div>
            </div>
          </div> */}
          <div className="input-box">
            <h3>Course Title</h3>
            <input type="text" name='text' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter your course title"  />
          </div>
          <div className="input-box">
            <h3>Course Description</h3>
            <input type="text" name='text' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter your course description"  />
          </div>

          <div className="column">
            <div className="input-box">
              <h3>Numbers of videos</h3>
              <input type="number" name='phone' onChange={handleForm} placeholder="Enter the total count of videos in your course"  />
            </div>
            <div className="input-box">
              <h3>Duretion of the course</h3>
              <input type="number" name='duretion' onChange={handleForm} placeholder="Enter duretion of your course"  />
            </div>
            <div className="input-box">
              <h3>Prize of your course  (in ₹)</h3>
              <input type="number" name='duretion' onChange={handleForm} placeholder="Enter the prize of your course"  />
            </div>
          </div>
        </form>
      )}

      {currentActive === 2 && (
        <form action="#" className="form">
          <h1>Details of Your Promo video</h1>

          <div className="input-box">
            <h3>Name of your Promo Video</h3>
            <input type="text" name='resname' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter the name of your video"  />
            <br />
            <h3>Video Description</h3>
            <input type="text" name='tagline' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter the description of your promo video" />
            <br />
          </div>
          <h3>Upload your video here</h3>
          <UploadVideoComponent/>
        </form>
      )}

      {currentActive === 3 && (
        <form action="#" className="form">
          <h1>Upload all videos</h1>          
        {value.map((data,i)=>{
          return (
            <div className="input-box" style={{display:'flex',columnGap:'20px'}}>
            <input type="text" name='resname' style={{ width: '45%' }} onChange={handleForm} placeholder="Enter the name of your video" />
          <UploadVideoComponent/>
          </div>
          )
        })}
          <br />
          <button onClick={handleadd} style={{width:'auto', backgroundColor:'orange',paddingInline:'16px',borderRadius:'10px'}}>Add video</button>
        </form>
      )}
      <br /><br />
      <div style={{display:'flex'}}>
        <button className="btn" id="prev" disabled={currentActive === 1} onClick={handleClickPrev}>Prev</button>
        <button className="btn" id="next" onClick={handlesubmit}>Next</button>
      </div>
      <br /><br />
    </div>
    </div>
  );
}

export default Start;
