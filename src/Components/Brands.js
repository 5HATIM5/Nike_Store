import React from 'react';
import './Brands.css'

const Brands = ({ logos }) => {
  return <div className='brands'>
    <div className="">
      <h1 className="brands_heading">ASSOCIATED PARTNERS</h1>
    </div>
    <div className="brands_logo">
      {
        logos.map((logo,index) => (
          <img className='logo_img' src={logo.logo_image} key={index} />
        ))
      }
    </div>

  </div>
};

export default Brands;
