import React from "react";
import HomeScreen from "./HomeScreen";
import FeaturedProduct from "./FeaturedComponent";
import Banner from "./Banner";
import banner from "../Assets/banner.PNG";
import spacejam from "../Assets/spacejam.jpg";
import { brands_logo_req } from "./requests";
import { useEffect, useState } from "react";
import Brands from "./Brands";
import BestSelling from "./BestSelling";


const MainPage = () => {

  const [logos, setLogo] = useState([]);


  useEffect(() => {

    const set_logos = async () => {
      return setLogo(brands_logo_req);
    }
    set_logos();
  }, []);


  return (
    <div className="mainPage">
      <HomeScreen />

      <FeaturedProduct />

      <Banner image={spacejam} />

      <BestSelling />

      <Banner image={banner} />

      {
        <Brands
          logos={logos}
        />
      }

    </div>
  );
};

export default MainPage;
