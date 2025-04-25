import React from "react";
import Waitlist from "../components/home/Waitlist";
import SalesItems from "../components/home/SalesItems";
import Card from "../components/home/Card";
import HomeHeroSection from "../components/home/HomeHeroSection";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <Card />
      <SalesItems />
      <Waitlist />
    </>
  );
};

export default HomePage;
