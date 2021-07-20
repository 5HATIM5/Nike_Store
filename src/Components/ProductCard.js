import React from "react";
import logo from "../Assets/logo.png";
import "./ProductCard.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined";
import Zoom from "react-reveal/Zoom";

const ProductCard = ({ image,title }) => {
  return (
    <div className="productCard">
      <div className="card_Imageblock">
        <img src={logo} className="card_logo" alt="Nike" />
        <Zoom>
          <div>
            <img src={image} className="card_Image" alt="Nike" />
          </div>
        </Zoom>
      </div>
      <div className="card_Content">
        <h1>{title}</h1>
        <h5>Running Collections</h5>
        <div className="product_Stars">
          <StarOutlinedIcon fontSize="small" />
          <StarOutlinedIcon fontSize="small" />
          <StarOutlinedIcon fontSize="small" />
          <StarOutlineOutlinedIcon fontSize="small" />
          <StarOutlineOutlinedIcon fontSize="small" />
        </div>
        <h6>Size</h6>
        <div className="size_Values">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <h6>Color</h6>
        <div className="color_Values">
          <div className="colorPallete seablue"></div>
          <div className="colorPallete red"></div>
          <div className="colorPallete purple"></div>
          <div className="price_Tag">
            <p>PKR 2,999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
