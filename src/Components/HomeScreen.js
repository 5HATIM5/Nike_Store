import React from "react";
import nike from "../Assets/nike.png";
import s1 from "../Assets/s1.png";
import s2 from "../Assets/s2.png";
import s3 from "../Assets/s3.png";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./HomeScreen.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <div className="radial">
        <div className="homeScreen_radial">
          <Zoom>
            <div>
              <img src={nike} className="Nike_img" alt="Nike shoe" />
            </div>
          </Zoom>
        </div>
      </div>
      <div className="homeScreen_content">
        <Fade bottom>
          <p className="content_Tagline">BASKETBALL SHOE</p>
          <p className="content_Heading">LeBron16</p>
          <p className="content_Matter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus facere perferendis aliquam hic assumenda qui tenetur
            similique unde sit ut, iusto commodi nemo fuga repellendus aliquid
            fugit veritatis vitae.
          </p>
          <Link to={'/shop'} >
            <button className="button_Shopnow">SHOP NOW</button>
          </Link>
          <div className="display_shoes">
            <img src={s1} className="display_shoes_nike " alt="Nike shoe" />
            <img src={s2} className="display_shoes_nike _margin30" alt="Nike shoe" />
            <img src={s3} className="display_shoes_nike _margin30" alt="Nike shoe" />
            <ArrowForwardIcon className="forward_arrow _margin30" fontSize="large" />
          </div>
        </Fade>
      </div>

      <ExpandMoreOutlinedIcon className="arrow" fontSize="large" />
    </div>
  )
}

export default HomeScreen
