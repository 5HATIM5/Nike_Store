import React from "react";
import HomeScreen from "./HomeScreen";
import FeaturedProduct from "./FeaturedComponent";
import Shop from "./Shop";
import Banner from "./Banner";
import Footer from "./Footer";
import banner from "../Assets/banner.PNG";
import spacejam from "../Assets/spacejam.jpg";


const MainPage = () => {
  return (
    <div className="mainPage">
      <HomeScreen />

      <FeaturedProduct />

      <Banner image={spacejam} />

      <Shop />

      <Banner image={banner} />
    </div>
  );
};

export default MainPage;
