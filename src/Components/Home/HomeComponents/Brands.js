import React from 'react';
import '../HomeComponentsStyling/Brands.css'

const Brands = ({ logos }) => {
  return <div className='brands_logo_main'>
    <h1 className="brands_heading">ASSOCIATED PARTNERS</h1>
    <div className="brands_logo">
      {
        logos.map((logo, index) => (
          <img className='logo_img' src={logo.logo_image} key={index} alt="Brand" />
        ))
      }
    </div>

  </div>
};

export default Brands;
