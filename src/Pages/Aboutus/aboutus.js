import React from 'react';
import About from '../../Component/About/About';
import Navbar from '../../Component/Navbar/Navbar';

const Aboutus = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '100px' }}>
                <About />
            </div>
        </>
    );
};

export default Aboutus;
