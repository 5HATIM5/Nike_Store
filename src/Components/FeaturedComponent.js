import React from "react";
import "./FeaturedComponent.css";
import pcard1 from "../Assets/pcard1.png";
import pcard2 from "../Assets/pcard2.png";
import pcard3 from "../Assets/pcard3.png";

import Fade from "react-reveal/Fade";



import ProductCard from "./ProductCard";
const FeaturedComponent = () => {
  return (
    <div className="featuredComponent">
    <Fade top>
    <h1>FEATURED PRODUCTS</h1>
    </Fade>
      <div className="poduct_cards">
        <ProductCard image={pcard1} title="Air Zoom 700" />
        <ProductCard image={pcard3} title="Air Max 270"/>
        <ProductCard image={pcard2} title="AirJordan Retro 1" />
      </div>
    </div>
  );
};

export default FeaturedComponent;
