import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default Main;
