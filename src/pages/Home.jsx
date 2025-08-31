// pages/Home.jsx
import React from "react";


import Hero from "../components/Hero";
import PopularSection from "../components/PopularSection";
import ShopByCategory from "../components/ShopByCategory";
import BestSellingSection from "../components/BestSellingSection";
import ExploreCreators from "../components/ExploreCreators";
import AboutUs from "../components/AboutUs";
import StatsCard from "../components/StatsCard"; // ⬅️ add
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Topbar /> */}
      {/* <Navbar showUpdateBar />  ✅ show update bar here */}
      
      <Hero />
      <PopularSection />
      <ShopByCategory />
      <BestSellingSection />
      <ExploreCreators />
      <AboutUs /> 
      <StatsCard targetLeft={30} targetRight={40000} />
    </div>
  );
}
