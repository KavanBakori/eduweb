import React from 'react';
import './Cource_One_Video.css';
const Card = ({ title, description, imageUrl }) => {
    return (
        <div>
            <a
                href="https://rzp.io/l/sY8S6Kh"
                className="card"
            >
                <img src={imageUrl} alt="" className="image"
                />
                <div className="content">
                    <h5 className="title">{title}</h5>
                    <p className='time'>Time:2 Hour</p>
                </div>
            </a>
        </div>
    );
};

export default Card;
