import React from 'react';
import About from '../../Component/About/About';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
const Aboutus = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '100px' }}>
                <About />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Aboutus;
