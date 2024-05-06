import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Myvideos({ email }) {

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

            <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '50px', rowGap: '20px', justifyContent: 'center', marginTop: '50px' }}>
                {
                    video.filter((item) => item.videoemail === email).map((item) => {
                        return (

                            <div class="" style={{ maxWidth: '40rem', boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px', borderRadius: '10px', display: 'flex', flexDirection: 'column', padding: '10px', height: 'auto' }}>
                                <video src={item.secure_url} class="card-img-top" controls></video>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontSize: '1.5em', color: 'black' }}>{item.topicname}</h5>
                                    <p class="card-text">{item.topicdes}</p>
                                    <p class="card-text" style={{ color: 'hsl(170, 75%, 41%)', fontWeight: 'bold' }}>Duration : {item.topictime}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>

        </>
    )


}

export default Myvideos;