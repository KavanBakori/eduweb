import Card from '../../Component/Cource_One_Video/Cource_One_Video';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import FAQ from '../../Component/FAQ/Faq';
import './Cource.css';
const Cource = () => {
    return ([
        <div>
            <Navbar></Navbar>
            <div>
                <div className='content_course'>
                    <div className='left'>
                        <h1>Mastering Web Development: From Basics to Advanced Techniques</h1>
                        <div className='desc'>
                            Mastering Web Development: From Basics to Advanced Techniques" is a comprehensive course covering HTML, CSS, JavaScript, and advanced frameworks.
                            Learn to create responsive and interactive websites, delve into front-end and back-end development, and gain hands-on experience with industry-standard tools and techniques.
                            Develop the skills needed to build dynamic web applications and stand out in the competitive field of web development.
                        </div>
                        {/* STATS */}
                        <div style={{ display: 'flex',flexDirection:'column' ,paddingTop:'10px'}}>
                            <section>
                                <div className="px-4 text-gray-600" style={{ display: 'flex', gap: '100px', paddingLeft:'20px' }} >
                                        <div >
                                            <h4 className="text-4xl text-indigo-600 font-semibold" style={{ fontSize: '25px', fontWeight: '700' }}>5.4</h4>
                                            <p className="mt-3 font-medium" style={{ fontSize: '25px' }}>Rating</p>
                                        </div>
                                        <div>
                                            <h4 className="text-4xl text-indigo-600 font-semibold" style={{ fontSize: '25px', fontWeight: '700' }}>40+</h4>
                                            <p className="mt-3 font-medium" style={{ fontSize: '25px' }}>Videoes</p>
                                        </div>
                                        <div >
                                            <h4 className="text-4xl text-indigo-600 font-semibold" style={{ fontSize: '25px', fontWeight: '700' }}>5.4H</h4>
                                            <p className="mt-3 font-medium " style={{ fontSize: '25px' }}>Duration</p>
                                        </div>
                                        <div>
                                            <h4 className="text-4xl text-indigo-600 font-semibold" style={{ fontSize: '25px', fontWeight: '700' }}>540 &#8377;</h4>
                                            <p className="mt-3 font-medium " style={{ fontSize: '25px' }}>Price</p>
                                       </div>
                                </div>
                            </section>
                            {/* BUTTON FOR PAYMENT */}
                            <div >
                            <button className="btn btn-primary" onClick={() => window.location.href = 'https://rzp.io/l/sY8S6Kh'}>
  Enroll Now
</button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <video className="video-player" controls>
                            {/* video url */}
                            <source src="/videos/sample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
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