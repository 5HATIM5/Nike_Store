import React from "react";
import "./MainPage.css";
import nike1 from "../Assets/nike1.png";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="radial">
        <div className="mainPage_radial">
          <img src={nike1} alt="" />
        </div>
      </div>
      <div className="mainPage_content">
        <p className="content_Tagline">BASKETBALL SHOE</p>
        <p className="content_Heading">LeBron16</p>
        <p className="content_Matter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus facere perferendis aliquam hic assumenda qui tenetur
          similique unde sit ut, iusto commodi nemo fuga repellendus aliquid
          fugit veritatis vitae.
        </p>
        <button className="button_Shopnow">SHOP NOW</button>
      </div>

      <ExpandMoreOutlinedIcon className="arrow" fontSize="large"/>
    </div>
  );
};

export default MainPage;
