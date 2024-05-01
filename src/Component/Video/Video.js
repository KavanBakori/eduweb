import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Search from '../search/search';
import axios from 'axios'

function Video() {

    const [video, setvideo] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3002/fetchupload')
            .then((response) => {
                setvideo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>
            <Navbar />
            <Search />

            <div style={{display:'flex',flexWrap:'wrap',columnGap:'50px',rowGap:'20px',justifyContent:'center',marginTop:'50px'}}>
            {
                video.map((item) => {
                    return (
                       
                           <div class="card" style={{ maxWidth: '70rem', display: 'flex', flexDirection: 'column', padding: '10px', height: 'auto' }}>
                                <video src={item.secure_url} class="card-img-top" controls></video>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontSize: '2em', color: 'black' }}>{item.topicname}</h5>
                                    <p class="card-text">{item.topicdes}</p>
                                    <p class="card-text" style={{ color: 'hsl(170, 75%, 41%)' }}>Duration : {item.topictime}</p>
                                </div>
                            </div>
                    );
                })}
            </div>

        </>
    )


}

export default Video;