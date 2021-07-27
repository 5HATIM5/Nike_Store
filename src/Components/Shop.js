import React from "react";
import pcard1 from "../Assets/pcard1.png";
import pcard2 from "../Assets/pcard2.png";
import pcard3 from "../Assets/pcard3.png";
import ProductCard from "./ProductCard";
import './Shop.css'
import Fade from "react-reveal/Fade";

const Shop = () => 
  {return (
    <div className="shop_head">
      <div className='headings'>
      <Fade top>
        <h1>SHOP</h1>
      </Fade>
      </div>
      <div className="shop">
      <div className="products">
      <ProductCard
          image={pcard1}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard2}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard3}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard1}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard2}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard3}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard1}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard2}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
         <ProductCard
          image={pcard3}
          title="Air Zoom 700"
          collection="Running Collections"
          price="18,000"
          rating={4}
          height = "small"
        />
      </div>
      </div>
    </div>
  );
};

export default Shop;
