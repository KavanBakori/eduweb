import React, { useEffect, useState } from 'react';
import Navbar from  '../../Component/Navbar/Navbar'
import axios from 'axios';
import './allsuggetions.css';

const AllSuggestions = ({email}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/fetchsuggetion')
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handlepick = async (topicname, topicdes, email) => {
    try {
      const pick = await fetch('http://localhost:3002/picked', {
        method: 'POST',
        body: JSON.stringify({"topicname":topicname, "topicdes":topicdes, "Educatoremail":email}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (pick.ok) {
        setSuccessMessage('Your topic has been picked successfully');
        alert(successMessage)
      } else {
        setErrorMessage('Failed to pick topic');
        alert(errorMessage)
      }
    } catch (error) {
      console.error('Error picked topic:', error);
      setErrorMessage('An error occurred while picking your topic');
    }
  }

  return (
    <>
    <Navbar/>
    <div className='tab'>
      <table>
        <thead>
          <tr>
            <th>Name of the Topic</th>
            <th>Description of the Topic</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((item, index) => (
            <tr key={index}>
              <td>{item.topicname}</td>
              <td>{item.topicdes}</td>
              <td><button onClick={() => handlepick(item.topicname, item.topicdes, email)}  style={{margin:'auto',backgroundColor:'orange',paddingInline:'40px',paddingTop:'6px',paddingBottom:'6px',borderRadius:'10px',color:'white'}}>Pick</button></td>
              {/* Add more table cells for your data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AllSuggestions;
