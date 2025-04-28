import React from "react";
import ShopHero from "../components/shop/ShopHero";
import Waitlist from "../components/home/Waitlist";
import ShopCard from "../components/shop/ShopCard";

const ShopPage = () => {
  return (
    <>
      <ShopHero  tittle="Shop"/>
      <ShopCard />
      <Waitlist />
    </>
  );
};

export default ShopPage;
