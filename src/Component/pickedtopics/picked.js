import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import UploadVideoComponent from '../uploadvideo/upload'

const Picked = ({ email }) => {
    const [picked, setPicked] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/fetchpicked')
            .then((response) => {
                setPicked(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className='tab'>
                <table>
                    <thead>
                        <tr>
                            <th>Name of the Topic</th>
                            <th>Description of the Topic</th>
                            {/* <th>Upload your video</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {picked
                            .filter(item => item.Educatoremail == email)
                            .map((item, index) => (
                                <tr >
                                    <td>{item.topicname}</td>
                                    <td>{item.topicdes}</td>
                                    {/* <td style={{display:'flex',justifyContent:'center'}}><UploadVideoComponent /></td> */}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Picked;
