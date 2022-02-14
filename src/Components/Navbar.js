import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import { IconButton } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ activeNav }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    if (activeNav != null) {
      handleShow(true)
    } else {
      window.addEventListener("scroll", () => setTimeout(function () {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      }));
    }
  }, []);


  return <div className={`navbar flex-center-sb ${show && "nav_black"}`}>

    <img className="navbar_logo" src={logo} alt="Nike_Logo" />

    <div className="navbar_links flex-center-sb text-Style" >
      <Link className="Link" to="/shop">
        <p className={` black-cl ${show && "navbar_icon_white"}`}>
          MEN
          <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
        </p>
      </Link>

      <Link className="Link" to="/shop">
        <p className={` black-cl ${show && "navbar_icon_white"}`}>
          WOMEN
          <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
        </p>
      </Link>
      <Link className="Link" to="/shop">
        <p className={` black-cl ${show && "navbar_icon_white"}`}>
          KIDS
          <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
        </p>
      </Link>
      <Link className="Link" to="/shop">
        <p className={`black-cl ${show && "navbar_icon_white"}`}>
          CUSTOMIZE</p>
      </Link>
    </div>

    <div className="navbar_icons">
      <IconButton>
        <ShoppingCartOutlinedIcon
          className={`navbar_icon ${show && "navbar_icon_white"}`}
          fontSize="small"
        />
      </IconButton>

      <Link to={'/login'}>
        <IconButton>
          <PermIdentityIcon
            className={`navbar_icon ${show && "navbar_icon_white"}`}
            fontSize="small"
          />
        </IconButton>
      </Link>

      <IconButton onClick={() => setBurgerStatus(true)}>
        <AppsOutlinedIcon
          fontSize="small"
          className={`navbar_icon ${show && "navbar_icon_white"}`}
        />
      </IconButton>
      <Fade right>
        <div className={burgerStatus ? "burger_Nav_active " : "burger_Nav"}>
          <div className="burger_Nav_closeIcon">
            <IconButton onClick={() => setBurgerStatus(false)}>
              <CloseOutlinedIcon
                style={{ color: "#000000" }}

              />
            </IconButton>
          </div>
          <p>
            MEN
            <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
          </p>

          <p>
            WOMEN
            <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
          </p>
          <p>
            KIDS
            <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
          </p>
          <p>CUSTOMIZE</p>
        </div>
      </Fade>
    </div>
  </div >
};

export default Navbar;
