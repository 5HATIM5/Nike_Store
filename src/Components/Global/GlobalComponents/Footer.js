import React from "react";
import "../GlobalComponentsStyling/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section1">
        <h1>Have Some Question About Us ?</h1>
        <button>MORE ABOUT US</button>
      </div>
      <div className="section2">
        <div>
          <h3>Products</h3>
          <p>Shoes</p>
          <p>Clothing</p>
          <p>Accessories</p>
          <p>Gift Card</p>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Sale</p>
        </div>

        <div className="hid">
          <h3>Sports</h3>
          <p>Soccer</p>
          <p>Running</p>
          <p>BasketBall</p>
          <p>Gift Card</p>
          <p>Football</p>
          <p>Outdoor</p>
          <p>Golf</p>
        </div>

        <div className="hid">
          <h3>Collections</h3>
          <p>Air Force</p>
          <p>Air Max</p>
          <p>Air Jordan</p>
          <p>Air Huarache</p>
          <p>Nike Cortez</p>
          <p>Nike Waffle Racer</p>
          <p>Nike Free</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Help</p>
          <p>Returns & Exchange </p>
          <p>Shipping</p>
          <p>Order Tracker</p>
          <p>Store Locator</p>
          <p>Size Charts</p>
          <p>Gift Card Balanace</p>
        </div>
        <div>
          <h3>Company Info</h3>
          <p>About Us</p>
          <p>Students</p>
          <p>Nike Apps</p>
          <p>Nike Stories</p>
          <p>Affiliates</p>
          <p>Press</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="section3">
        <p>@2021 NIKE, Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
