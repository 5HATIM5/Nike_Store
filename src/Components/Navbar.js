import React from "react";
import logo from "../Assets/logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import { IconButton } from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={logo} alt="Nike_Logo" />

      <div className="navbar_links">
        <p>
          MEN
          <ExpandMoreOutlinedIcon style={{color:"#808080"}}/>
        </p>

        <p>
          WOMEN
          <ExpandMoreOutlinedIcon style={{color:"#808080"}}/>
        </p>
        <p>
          KIDS
          <ExpandMoreOutlinedIcon style={{color:"#808080"}}/>
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
          <AppsOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
