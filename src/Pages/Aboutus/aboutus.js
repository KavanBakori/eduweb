import React from 'react';
import About from '../../Component/About/About';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import FaqsCard from '../../Component/FAQ/Faq';
const Aboutus = () => {
    return (
        <>
            <Navbar />
            <div >
                <About />
            </div>
            <FaqsCard/>
            <Footer></Footer>
        </>
    );
};

export default Aboutus;
