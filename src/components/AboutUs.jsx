import React from "react";

// swap these with your actual files
import chevrons from "../assets/logo.svg";   // small GDGC chevrons
import figure from "../assets/hero3.svg"; // tall character on the right

export default function AboutUs() {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 text-white">
      {/* Right-side tall figure (pinned to edge) */}
     <img
  src={figure}
  alt=""
  className="pointer-events-none select-none hidden lg:block
             absolute right-0 bottom-0 h-[400px] xl:h-[400px] w-auto translate-y-[80px]"
  draggable="false"
/>


      {/* Content row */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: heading + copy */}
        <div className="relative z-10">
          <h2 className="font-teknaf text-[28px] sm:text-[30px] tracking-[0.02em] mb-6">
            About Us
          </h2>

          <h3 className="font-productsans text-3xl font-black text-[24px] sm:text-[28px] leading-[130%] font-semibold translate-y-[25px]">
            We are a family that believes in{" "}
            <span className="text-[#F06292]">passion</span> and{" "}
            <span className="text-[#22C55E]">progress</span>. Our merchandise is a
            symbol of who we are.
          </h3>

          <p className="mt-12 font-productsans text-3xl font-light text-[14px] sm:text-[16px] leading-[150%] text-white/80 max-w-[640px]">
            At GDGC NIT Campus, we believe in faith, trust, and spirit of
            innovation. Every design carries our story — of learning, building and
            leading together. We are not just a developer community.
          </p>
        </div>

        {/* Right: chevrons logo block */}
        <div className="relative z-10 flex md:justify-start lg:justify-end">
          <img
            src={chevrons}
            alt="GDGC logo"
  className="absolute top-20 left-1/2 -translate-x-[100px] w-[180px] h-auto translate-y-[80px]"
          />
        </div>
      </div>
    </section>
  );
}
