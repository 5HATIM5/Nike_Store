import React from "react";
import "./MainPage.css";
import nike from "../Assets/nike.png";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="radial">
        <div className="mainPage_radial">
          <Zoom>
            <div>
              <img src={nike} className="Nike_img" alt="Nike shoe" />
            </div>
          </Zoom>
        </div>
      </div>
      <div className="mainPage_content">
        <Fade bottom>
          <p className="content_Tagline">BASKETBALL SHOE</p>
          <p className="content_Heading">LeBron16</p>
          <p className="content_Matter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus facere perferendis aliquam hic assumenda qui tenetur
            similique unde sit ut, iusto commodi nemo fuga repellendus aliquid
            fugit veritatis vitae.
          </p>
          <button className="button_Shopnow">SHOP NOW</button>
        </Fade>
      </div>

      <ExpandMoreOutlinedIcon className="arrow" fontSize="large" />
    </div>
  );
};

export default MainPage;
