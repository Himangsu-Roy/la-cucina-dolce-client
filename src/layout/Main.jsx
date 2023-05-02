import React from "react";
// import Chefs from "../Chefs/Chefs";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Chefs from "../components/Chefs/Chefs";
import SuperDelicious from "../components/SuperDelicious/SuperDelicious";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />
      <Banner />
      <Chefs />
      <SuperDelicious />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Main;
