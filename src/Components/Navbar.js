import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { IconButton } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import "./Navbar.css";

const Navbar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className="navbar flex-center-sb">
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
        <IconButton className="navbar_icon">
          <ShoppingCartOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton className="navbar_icon">
          <SearchOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton className="navbar_icon">
          <AppsOutlinedIcon
            onClick={() => setBurgerStatus(true)}
            fontSize="small"
            className="Apps_iconbutton"
          />
        </IconButton>
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
      </div>
    </div>
  );
};

export default Navbar;
