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
        <ProductCard
        
          key={1}
          image={pcard1}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          details="show"
        />
        <ProductCard
          key={2}
          image={pcard3}
          title="Air Max 270"
          collection="Running Collections"
          price="12,500"
          rating={5}
          details="show"
        />
        <ProductCard
          key={3}
          image={pcard2}
          title="AirJordan Retro 1"
          collection="Retro Design"
          price="17,999"
          rating={4}
          details="show"
        />
      </div>
    </div>
  );
};

export default FeaturedComponent;
