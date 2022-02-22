import React from "react";
import logo from "../../../Assets/logo.png";
import "../HomeComponentsStyling/ProductCard.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import Zoom from "react-reveal/Zoom";

const ProductCard = ({ image, title, price, collection, rating, details, height }) => {

  const cardheight = "small";
  return (
    <div className={`productCard ${cardheight === height && "productCard_small"}`}>
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
        <h5>{collection}</h5>
        <div className="product_Stars">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateIcon
                key={Math.floor(Math.random() * (100000 - 1 + 1)) + 1}
                fontSize="small" />
            ))}
        </div>
        {
          details === 'show' ?
            <>
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
                  <p>PKR {price}</p>
                </div>
              </div></>
            : null
        }

      </div>
    </div>
  );
};

export default ProductCard;
