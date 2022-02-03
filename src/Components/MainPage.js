import React from "react";
import HomeScreen from "./HomeScreen";
import FeaturedProduct from "./FeaturedComponent";
import Shop from "./Shop";
import Banner from "./Banner";
import banner from "../Assets/banner.PNG";
import spacejam from "../Assets/spacejam.jpg";
import { requests, header } from "./requests";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {

  const [shoes, setShoes] = useState([]);

  useEffect(() => {

    // axios.get(requests.fetchShoes, {
    //   headers: header
    // })
    //   .then(function (response) {
    //     setShoes(response.data.results);
    //   })
  }, []);


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
