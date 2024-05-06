import React, { useEffect, useState } from 'react';
import Card from '../../Component/Cource_One_Video/Cource_One_Video';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import FAQ from '../../Component/FAQ/Faq';
import { useLocation } from 'react-router-dom';
import './Cource.css';
import axios from 'axios';

const Cource = () => {
    const location = useLocation(); // Initialize useLocation to get navigation state
    const [onecourses, setonecourses] = useState([]);


    // Access parameters from the location state
    const { courseTitle } = location.state;

    useEffect(() => {
        axios.get('http://localhost:3002/fetchcourses')
            .then((response) => {
                setonecourses(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return ([
        <div>
            <Navbar></Navbar>
            <div>

                {onecourses.filter((item) => item.coursetitle == courseTitle).map((item) => (

                    <div className='content_course'>
                        <div className='left'>
                            <h1 style={{ color:'#4968e4',borderRadius:'10px',width:'100%', padding:'10px'}}>{courseTitle}</h1>
                            <div className='desc' >
                                {item.coursedes}
                            </div>
                            {/* STATS */}
                            <div style={{ display: 'flex', flexDirection: 'column',marginTop:'-70px' }}>
                                <section className="section stats" aria-label="stats">
                                    <div className="container">
                                        <ul className="grid-list">
                                            <li>
                                                <div className="stats-card" style={{ '--color': '170, 75%, 41%', height:'130px', width:'200px' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px' }} >{item.courseduration} hours</h3>
                                                    <p className="card-text">Duration</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="stats-card" style={{ '--color': '351, 83%, 61%', height:'130px', width:'200px' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px' }}>{item.coursevideocount}</h3>
                                                    <p className="card-text">Videos</p>
                                                </div>
                                            </li>

                                            {/* <li>
                                                <div className="stats-card" style={{ '--color': '260, 100%, 67%' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px' }}>{item.coursecategory}</h3>
                                                    <p className="card-text">Category</p>
                                                </div>
                                            </li> */}

                                            <li>
                                                <div className="stats-card" style={{ '--color': '42, 94%, 55%', height:'130px', width:'200px' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px' }}>₹{item.courseprice}</h3>
                                                    <p className="card-text">Price</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                {/* BUTTON FOR PAYMENT */}
                                <div style={{marginTop:'-70px'}}>
                                    <button className="btn btn-primary" onClick={() => window.location.href = 'https://rzp.io/l/sY8S6Kh'}>
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <video className="video-player" controls>
                                {/* video url */}
                                <source src={item.secure_url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}
                <div className='all_videoes'>
                    <h2 className='title_heading'>All Videoes</h2>
                    <div className='all_cource_video'>
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            imageUrl="https://flowbite.com/docs/images/blog/image-4.jpg"
                        />
                    </div>
                </div>
            </div>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    ])
}
export default Cource;