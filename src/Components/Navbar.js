import React from "react";
import logo from "../Assets/logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={logo} alt="Nike_Logo" />

      <div className="navbar_links">
        <p>MEN</p>
        <p>WOMEN</p>
        <p>KIDS</p>
        <p>CUSTOMIZE</p>
      </div>

      <div className="navbar_icons">
        <ShoppingCartOutlinedIcon
          className="navbar_icons_inner"
          fontSize="small"
        />
        <SearchOutlinedIcon className="navbar_icons_inner" fontSize="small" />
        <AppsOutlinedIcon className="navbar_icons_inner" fontSize="small" />
      </div>
    </div>
  );
};

export default Navbar;
