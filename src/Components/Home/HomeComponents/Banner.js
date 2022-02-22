import React from 'react';
import '../HomeComponentsStyling/Banner.css';


const Banner = ({ image }) => {
    return (
        <div className="banner">
            <img className="banner_img" src={image} alt='' />
        </div>
    )
}

export default Banner
