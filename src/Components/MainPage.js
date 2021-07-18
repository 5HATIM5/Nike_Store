import React from "react";
import "./MainPage.css";
import HomeScreen from "./HomeScreen";
import FeaturedProduct from "./FeaturedComponent";

const MainPage = () => {
  return (
    <div className="mainPage">
     
      <HomeScreen/>

      <FeaturedProduct/>
    </div>
  );
};

export default MainPage;
