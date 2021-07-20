import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import { IconButton } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Fade from "react-reveal/Fade";

import "./Navbar.css";

const Navbar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener("scoll");
    };
  }, []);

  return (
    <div className={`navbar flex-center-sb ${show && "nav_black"}`}>
      <img className="navbar_logo" src={logo} alt="Nike_Logo" />

      <div className="navbar_links flex-center-sb text-Style">
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

      <div className="navbar_icons">
        <IconButton>
          <ShoppingCartOutlinedIcon
            className={`navbar_icon ${show && "navbar_icon_white"}`}
            fontSize="small"
          />
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon
            className={`navbar_icon ${show && "navbar_icon_white"}`}
            fontSize="small"
          />
        </IconButton>
        <IconButton>
          <AppsOutlinedIcon
            onClick={() => setBurgerStatus(true)}
            fontSize="small"
            className={`navbar_icon ${show && "navbar_icon_white"}`}
          />
        </IconButton>
        <Fade right>
          <div className={burgerStatus ? "burger_Nav_active " : "burger_Nav"}>
            <div className="burger_Nav_closeIcon">
              <IconButton>
                <CloseOutlinedIcon
                  style={{ color: "#000000" }}
                  onClick={() => setBurgerStatus(false)}
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
    </div>
  );
};

export default Navbar;
